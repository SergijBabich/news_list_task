import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShowNewsDataService } from '../../services/news_page_service.service'
import { NewsPage } from '../../interfaces/interface'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {

  @Input() newsList: NewsPage;

  constructor(  private router: Router,
                private _newsPageService: ShowNewsDataService) {}

  onSelect(): void {
   this.router.navigate(['/newspage', this.newsList.title])
   this._newsPageService.getNewsDataPage(this.newsList);

  }

  ngOnInit(): void {
  }

}
