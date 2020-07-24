import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowNewsDataService } from '../../services/news_page_service.service'
import { NewsList } from '../../interfaces/interfaces';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})

export class NewsPageComponent implements OnInit {

  public selectedNews: Object;
  
  constructor( private route: ActivatedRoute, 
               private _newsPageService: ShowNewsDataService  ) { }



  ngOnInit(): void {
    let title: string = this.route.snapshot.paramMap.get("title")
    this._newsPageService.selectedPage$.subscribe((newsData:NewsList) => {
      this.selectedNews = newsData;
    });
  }

}
