import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
 transform(newsList, value) {
     console.log(newsList, value)
    return newsList.filter(news => {
        return news.title.toLowerCase().includes(value);
    })
 }

}