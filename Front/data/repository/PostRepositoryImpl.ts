import PostDataSource from "data/remote/PostDataSource";
import PostRepository from "domain/repository/PostRepository";

export default class PostRepositoryImpl implements PostRepository {
  private static _Instance: PostRepositoryImpl;
  static GetInstace() {
    if(!PostRepositoryImpl._Instance) {
      PostRepositoryImpl._Instance = new PostRepositoryImpl();
    }
    return PostRepositoryImpl._Instance;
  }

  private readonly _remote = PostDataSource.GetInstace();

  async getList(){
    this._remote.getList();
  }
}