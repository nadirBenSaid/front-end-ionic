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
  		return this.http.get(environment.url+
  			'/emplacements/'+id+'/'+jour,{ withCredentials: true});

  	}

  voter(v,id) {
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


  	 let postData = {
            "vote": v,
            "jour": n,
            "heure": h,

    }
    
    
  	return this.http.post(environment.url+'/emplacements/'+id+'/evaluer',postData,
  		{ withCredentials: true}).subscribe(data => {
        console.log(data);
       }, 
       error => {
        console.log("error");
       });
  	
     
  }
}