import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class LocationsService {

  constructor(private http: HttpClient) { }


   getUserData()
   {
    return this.http.get(environment.url+'/emplacements/near/35.5711,-5.3724', { withCredentials: true });  
}

}
