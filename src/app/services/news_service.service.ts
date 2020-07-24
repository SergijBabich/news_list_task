import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class NewsService {
    constructor( private _http: HttpClient) {  } 
    baseUrl: string = `http://newsapi.org/v2/top-headlines?sources=the-next-web,entertainment-weekly&apiKey=04900f9029a14dc2abf20de72096ca00`
    
      public getAllNews():Observable<object> {
        return this._http.get<Response[]>(this.baseUrl)

        
        
  }
}


