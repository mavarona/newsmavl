import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.scss'],
})
export class ListnewsComponent implements OnInit {

  @Input() news: Array<Article> = new Array<Article>();
  @Input() inFavorites = false;

  constructor() { }

  ngOnInit() {}

}
