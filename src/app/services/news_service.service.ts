import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class NewsService {
    constructor( private _http: HttpClient) {  }
    public now = new Date();
    public day = this.now.getDate();
    public month = this.now.getMonth();
    public year = this.now.getFullYear();  
           baseUrl: string = `http://newsapi.org/v2/everything?q=bitcoin&from=${this.year}-${this.month}-${this.day}&sortBy=publishedAt&apiKey=04900f9029a14dc2abf20de72096ca00`
    
      public getAllNews():Observable<object> {
        return this._http.get(this.baseUrl)
        .pipe(catchError(err => {
          throw 'error in source. Details: ' + err;
        }))
        
        
  }
}