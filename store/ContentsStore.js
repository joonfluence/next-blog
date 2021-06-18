import { makeAutoObservable, observable } from "mobx";

class ContentStore {
	_contentList = observable.box([]);

	constructor() {
		makeAutoObservable(this);
	}

	get contentList() {
		return this._contentList.get();
	}

	set contentList(initialState) {
		this._contentList.set(initialState);
	}

	getList() {
		this._contentList.set([
			{
				id: 1,
				title: "6월 15일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
			{
				id: 2,
				title: "6월 16일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
			{
				id: 3,
				title: "6월 17일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
			{
				id: 4,
				title: "6월 15일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
			{
				id: 5,
				title: "6월 16일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
			{
				id: 6,
				title: "6월 17일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
			{
				id: 7,
				title: "6월 15일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
			{
				id: 8,
				title: "6월 16일 TIL",
				category: {
					title: "생각정리",
					lowCategory: {
						title: "TIL",
					},
				},
				content:
					"loremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem oremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem",
				createdAt: new Date().toString().slice(4, 16),
				imageSource: "https://via.placeholder.com/100x100",
			},
		]);
		return this._contentList.get();
	}
}

const ContentsStore = new ContentStore();
export default ContentsStore;
