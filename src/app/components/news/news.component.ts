import {Component , OnInit} from '@angular/core';
import { NewsService }  from '../../services/news_service.service';
import { NewsList, Some } from '../../interfaces/interface'
@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
 export class NewsComponent implements OnInit {

    newsList: any;
    pageSlice: Array<object>;
    searchTitle: string = '';
    searchValue: string = '';
    constructor( private _newsService: NewsService)  {
     }
    
    OnPageChange(event): void {
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
        .subscribe((response) => { 
            this.newsList =  response;
            this.pageSlice = this.newsList.articles.slice(0,9);
        })
       this.searchTitle = localStorage.getItem('Search-value');
    }
   
 }