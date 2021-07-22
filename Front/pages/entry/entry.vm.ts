import { makeAutoObservable, observable } from "mobx";
import { getContentsList } from "../_api";

class ContentStore {
	_contentList = observable.box([]);

	private _state = "";

	constructor() {
		makeAutoObservable(this);
	}

	get contentList() {
		return this._contentList.get();
	}

	set contentList(initialState) {
		this._contentList.set(initialState);
	}

	// async fetchList() {
	// 	this._contentList.set(await getContentsList());
	// 	// return await getContentsList();
	// 	return this._contentList.get();
	// }

	async getList() {
		this._state = "pending";
		try {
			const posts = await getContentsList();
			this._contentList.set(posts);
			this._state = "done";
			return posts;
		} catch (error) {
			this._state = "error";
			throw error;
		}
	}

	// fetchAsyncList() {
	// 	this.state = "pending";
	// 	axios.get("http://localhost:5000/contentList").then(
	// 		action("fetchSuccess", (posts) => {
	// 			const fillteredPosts = JSON.stringify(posts);
	// 			this._contentList.set(fillteredPosts);
	// 			this.state = "done";
	// 			return this._contentList.get();
	// 		}),
	// 		action("fetchError", (error) => {
	// 			console.log(error);
	// 			this.state = "error";
	// 			throw error;
	// 		}),
	// 	);
	// }

	// fetchFlowList = flow(function* () {
	// 	this.state = "pending";
	// 	try {
	// 		// await 대신에 yield 를 사용합니다.
	// 		const posts = yield getContentsList();
	// 		// const fillteredPosts = JSON.stringify(posts);
	// 		this._contentList.set(posts);
	// 		this.state = "done";
	// 		// console.log(posts, fillteredPosts);
	// 		// 비동기 작업이 필요한 부분을 수동으로 감싸지 않아도 됩니다.
	// 	} catch (error) {
	// 		this.state = "error";
	// 	}
	// });

	// async getList() {
	// 	this._contentList.set(await this.fetchFlowList());
	// 	return this._contentList.get();
	// }
}

const ContentsStore = new ContentStore();
// const projects = await flowResult(ContentsStore.fetchList());
export default ContentsStore;
