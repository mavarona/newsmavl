import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ResponseTopNews } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopNews() {
    const path = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd40be607fe94c0fb6afa8c74e7418e4`;
    return this.http.get<ResponseTopNews>(path);
  }

}
