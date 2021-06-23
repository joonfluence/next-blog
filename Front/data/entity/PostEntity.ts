export interface PostEntity {
  id: number,
  title: string,
  category: {
    title: string,
    lowCategory: {
      title : string,
    }
  },
  content: string,
  createdAt: Date,
  imageSource: string
}