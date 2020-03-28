import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseTopNews } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apyKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  headLinesPage = 0;

  categoryCurrent = '';
  categoryPage = 0;

  constructor(private http: HttpClient) { }

  private executeQuery<T>( query: string ) {

    query = apiUrl + query;

    return this.http.get<T>( query, { headers });

  }

  getTopNews() {
    this.headLinesPage++;
    return this.executeQuery<ResponseTopNews>(`/top-headlines?country=us&page=${ this.headLinesPage }`);
  }

  getTopNewsCategory( category: string ) {
    if (this.categoryCurrent === category){
      this.categoryPage++;
    } else {
      this.categoryPage = 1;
      this.categoryCurrent = category;
    }
    return this.executeQuery<ResponseTopNews>(`/top-headlines?country=us&category=${ category }&page=${ this.categoryCurrent }`);
  }

}
