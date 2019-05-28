import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Http,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) {}
  
  	details(id,jour){
  		let myHeaders: HttpHeaders = new HttpHeaders();
  		myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
  		return this.http.get(environment.url+
  			'/emplacements/'+id+'/'+jour,{ headers: myHeaders, withCredentials: true});

  	}
   
}