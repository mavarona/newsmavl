import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() newData: Article;
  @Input() index: Number;

  constructor( private iab: InAppBrowser ) { }

  ngOnInit() {}

  openNews() {
     const browser = this.iab.create(this.newData.url, '_system');
  }

}
