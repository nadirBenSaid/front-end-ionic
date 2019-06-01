import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private http : HttpClient) { }

  getFavoris() : Observable<any> {
    return this.http.get('http://185.181.160.12:8086/favories',{ withCredentials: true});  }
}