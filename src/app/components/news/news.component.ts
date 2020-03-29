import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() newData: Article;
  @Input() index: Number;

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               private socialSharing: SocialSharing,
               private dataLocalService: DataLocalService ) { }

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
            this.socialSharing.share(
              this.newData.title,
              this.newData.source.name,
              null,
              this.newData.url
            );
          }
        },
        {
          text: 'Favoritos',
          icon: 'star',
          handler: () => {
            this.dataLocalService.saveNews( this.newData );
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
