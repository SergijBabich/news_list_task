import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component'
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent},
  { path: 'newspage/:title', component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
