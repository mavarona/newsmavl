import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild('segments', {static: true}) segment: IonSegment;

  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  news: Article[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit(): void {
    this.segment.value = this.categories[0];
    this.loadListNews(this.categories[0]);
  }

  changeCategory(e) {
    this.news = [];
    this.loadListNews(e.detail.value);
  }

  private loadListNews( category: string ) {

    this.newsService.getTopNewsCategory( category )
        .subscribe( resp => {
          this.news.push( ...resp.articles );
        });

  }

}
