import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    authenticate(u, p) {
        var username = u;
        var password = p;
        var all = username + ':' + password;
        var all_crypted = btoa(all);

        let myHeaders: HttpHeaders = new HttpHeaders();
        myHeaders = myHeaders.append('Authorization', 'Basic ' + all_crypted);
        return this.http.get(environment.url + '/users/me', { headers: myHeaders, withCredentials: true });

    }
}
