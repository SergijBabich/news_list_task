import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';

@Injectable()
export class NewsService {
   
    constructor( private _http: HttpClient) {  }

    public getAllNews() { 
        return this._http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-23&sortBy=publishedAt&apiKey=7f811c3c0a824b3ab9bdad83e23c8031')
        
  }
}