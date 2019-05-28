import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {environment} from '../../environments/environment';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  latALon:string="";
  constructor(private http: HttpClient, private geolocation:Geolocation) {
    this.location();
   }

  location()  {
    this.geolocation.getCurrentPosition().then((resp)=>{
      //resp.coords.latitude
       //resp.coords.longitude
       this.latALon = resp.coords.latitude.toFixed(4)+","+resp.coords.longitude.toFixed(4);

   }).catch((error)=>{
     console.log('error getting location',error);
   });
  }

  getSearchData(lieu:string): Observable<any>{
    return this.http.get(environment.url+'/emplacements/query/'+lieu+'/100000/'+this.latALon, { withCredentials: true });  
  }

}