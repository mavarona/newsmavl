import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  listNews: Article[] = [];

  constructor( private storage: Storage ) {
    this.loadListNews();
   }

  saveNews( news: Article ) {

    const exists = this.listNews.find( item => item.title === news.title );

    if ( !exists ) {
      this.listNews.unshift( news );
      this.storage.set('favorites', this.listNews);
    }

  }

  async loadListNews( ) {
    const favorites =  await this.storage.get('favorites');
    if (favorites) {
      this.listNews = favorites;
    }
  }

}
