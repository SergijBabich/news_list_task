import {MatPaginatorModule} from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [
        MatPaginatorModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatPaginatorModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
    ]
  })



  export class MaterialModule { }