import { ListEntity } from "data/entity/ListEntity";
import { PostEntity } from "data/entity/PostEntity";
import RemoteDataSource from "./RemoteDataSource";

export default class PostDataSource extends RemoteDataSource {
  private static _Instance: PostDataSource;
  static GetInstace() {
    if(!PostDataSource._Instance) {
      PostDataSource._Instance = new PostDataSource();
    }
    return PostDataSource._Instance;
  }
  
  private constructor() {
    super();
  }

  public async getList(): Promise<ListEntity<PostEntity>> {
    return {} as any;
  }
}