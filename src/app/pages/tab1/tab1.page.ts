import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  news: Array<Article> = new Array<Article>();

  constructor(private newService: NewsService) {}

  ngOnInit(): void {
    this.loadListNews();
  }

  loadData(e) {
    this.loadListNews(e);
  }

  private loadListNews(e?) {
    this.newService.getTopNews()
        .subscribe( resp => {
          if (resp.articles.length === 0) {
            e.target.disabled = true;
            e.tartet.complete();
            return;
          }
          this.news.push(...resp.articles);
          if (e) {
            e.tartet.complete();
          }
        }
    );
  }

}
