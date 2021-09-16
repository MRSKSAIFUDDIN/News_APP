import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=af0c863e9e244189b5eefb8fd658ed02";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=af0c863e9e244189b5eefb8fd658ed02";

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=af0c863e9e244189b5eefb8fd658ed02";

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl);
  }
}
