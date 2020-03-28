import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() newData: Article;
  @Input() index: Number;

  constructor( private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {}

  openNews() {
     const browser = this.iab.create(this.newData.url, '_system');
  }

  async launchMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Shared clicked');
          }
        },
        {
          text: 'Favoritos',
          icon: 'star',
          handler: () => {
            console.log('Favoritos');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('cancel click');
          }
        }
      ]
    });

    await actionSheet.present();

  }

}
