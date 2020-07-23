import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class NewsService {
   
    constructor( private _http: HttpClient) {  }
      baseUrl: string = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-06-23&sortBy=publishedAt&apiKey=7f811c3c0a824b3ab9bdad83e23c8031'
    
      public getAllNews():Observable<object> { 
        return this._http.get(this.baseUrl)
        .pipe(catchError(err => {
          throw 'error in source. Details: ' + err;
        }))
        
  }
}