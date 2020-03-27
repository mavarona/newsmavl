import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListnewsComponent } from './listnews/listnews.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    ListnewsComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ListnewsComponent
  ]
})
export class ComponentsModule { }
