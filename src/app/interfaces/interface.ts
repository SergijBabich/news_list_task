export interface NewsList {
    author: string, 
    content: string,
    description: string
    publishedAt:string,
    source: object , 
    title:string,
    url:string , 
    urlToImage:string,

}

export interface NewsPage {
    title:string,
    publishedAt:string,
    urlToImage:string,
    description: string
  }