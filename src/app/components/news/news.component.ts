import {Component , OnInit} from '@angular/core';
import { NewsService }  from '../../services/news_service.service';
import { NewsList, Some, Response } from '../../interfaces/interfaces'

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
 export class NewsComponent implements OnInit {

    public newsList: Array<object>;
    public pageSlice: Array<object>;
    public searchTitle: string;
    public searchValue: string;
    constructor( private _newsService: NewsService)  {
     }
    
    OnPageChange(event) {
        const startIndex = event.pageIndex + event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if (endIndex > this.newsList.length) {
            endIndex = this.newsList.length
        }
        this.pageSlice = this.newsList.slice(startIndex, endIndex);
    } 

    saveSearchQuery(event: KeyboardEvent): void {
        localStorage.setItem('Search-value', this.searchTitle);
        this.searchTitle = localStorage.getItem('Search-value');
    }
  
    ngOnInit(): void {
      this._newsService.getAllNews()
        .subscribe((response:Response) => { 
            this.newsList =  response.articles;
            this.pageSlice = this.newsList.slice(0,9);
        })
        localStorage.getItem('Search-value')===null? this.searchTitle = ' ': this.searchTitle = localStorage.getItem('Search-value') ;
    }
   
 }