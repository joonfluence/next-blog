import GetPostListModel from "domain/model/GetPostListModel";
import PostModel from "domain/model/PostModel";

export default class PostUseCases {
  public constructor(){

  }

  public getList(dto: GetPostListModel): Promise<PostModel>{
    return {} as any;
  }
}