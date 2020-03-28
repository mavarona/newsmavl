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

  constructor(private http: HttpClient) { }

  private executeQuery<T>( query: string ) {

    query = apiUrl + query;

    return this.http.get<T>( query, { headers });

  }

  getTopNews() {
    return this.executeQuery<ResponseTopNews>(`/top-headlines?country=us`);
  }

  getTopNewsCategory( category: string ) {
    return this.executeQuery<ResponseTopNews>(`/top-headlines?country=us&category=${ category }`);
  }

}
