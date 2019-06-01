import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import {Http,Headers,RequestOptions} from '@angular/http';
import{Observable} from 'rxjs';
import {ActivatedRoute} from'@angular/router';
import{environment} from '../../environments/environment';
import{HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamerService {

  constructor(private http: HttpClient, public route: ActivatedRoute) { }
  reclamer(t,m){


  let postData={
  "titre":t,
  "message":m,
  }
  return this.http.post(environment.url+'/reclamations/add',postData,
  { withCredentials: true}).subscribe(data=>{
  console.log(data);
  },
  error=>{
  console.log("error");
  });
  }
}
