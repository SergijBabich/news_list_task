import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ShowNewsDataService {
    private selectedPage = new ReplaySubject(0);
    public selectedPage$ = this.selectedPage.asObservable();
    constructor() {}

    public getNewsDataPage(message) {
      this.selectedPage.next(message);
    }
}


