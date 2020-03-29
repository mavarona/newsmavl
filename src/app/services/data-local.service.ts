import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  listNews: Article[] = [];

  constructor( private storage: Storage,
               private toastController: ToastController ) {
    this.loadListNews();
   }

  async presentToast( message: string ) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  saveNews( news: Article ) {

    const exists = this.listNews.find( item => item.title === news.title );

    if ( !exists ) {
      this.listNews.unshift( news );
      this.storage.set('favorites', this.listNews);
      this.presentToast('Se agregó a favoritos');
    }

  }

  async loadListNews( ) {
    const favorites =  await this.storage.get('favorites');
    if (favorites) {
      this.listNews = favorites;
    }
  }

  deleteNews( news: Article ) {
    this.listNews = this.listNews.filter ( item => item.title !== news.title );
    this.storage.set('favorites', this.listNews);
    this.presentToast('Se eliminó a favoritos');
  }

}
