import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './material/material.module';
import { NewsService } from './services/news_service.service';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ShowNewsDataService } from './services/news_page_service.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CardComponent,
    NewsPageComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    HttpClientJsonpModule
    
  ],
  providers: [NewsService, ShowNewsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
