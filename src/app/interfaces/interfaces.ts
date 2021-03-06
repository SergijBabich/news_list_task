export interface NewsList {
    author: string, 
    content?: string,
    description: string
    publishedAt?:string,
    source: object , 
    title:string,
    url?:string , 
    urlToImage?:string,

}

export interface NewsPage {
    title:string,
    publishedAt:string,
    urlToImage?:string,
    description: string
  }

  export interface Some {
    articles:object,
    status:string,
    totalResults: number

  }
  export interface Response {
    articles: Array<object>,
    status: string,
    totalResults: number 
}
  