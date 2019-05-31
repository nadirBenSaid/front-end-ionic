import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private http : HttpClient) { }

  getFavoris(u, p) : Observable<any> {
    var username = u;
    var password = p;
    var all = username + ':' + password;
    var all_crypted = btoa(all);
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic' + all_crypted);
    return this.http.get('http://185.181.160.12:8086/favories',{ headers: myHeaders, withCredentials: true});  }
}