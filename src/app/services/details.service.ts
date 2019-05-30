import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Http,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient,public route: ActivatedRoute) {}
  public id:string;
  	details(id,jour){
  		let myHeaders: HttpHeaders = new HttpHeaders();
  		myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');
  		return this.http.get(environment.url+
  			'/emplacements/'+id+'/'+jour,{ headers: myHeaders, withCredentials: true});

  	}

  voter(v) {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "dimanche";
    weekday[1] = "lundi";
    weekday[2] = "mardi";
    weekday[3] = "mercredi";
    weekday[4] = "jeudi";
    weekday[5] = "vendredi";
    weekday[6] = "samedi";

    var n = weekday[d.getDay()];
    var h = d.getHours();
    this.id = this.route.snapshot.paramMap.get('id');
  	let myHeaders: HttpHeaders = new HttpHeaders();
  	myHeaders = myHeaders.append('Authorization','Basic YWxpOmFsaQ==');

  	 let postData = {
            "vote":v,
            "jour":n,
            "heure":h,

    }
    
    
  	return this.http.post(environment.url+'/emplacements/'+this.id+'/evaluer',postData,
  		{ headers: myHeaders, withCredentials: true}).subscribe(data => {
        console.log(data);
       }, 
       error => {
        console.log("error");
       });
  	
     
  }
}