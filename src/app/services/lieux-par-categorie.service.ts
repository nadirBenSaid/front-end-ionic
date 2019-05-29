import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LieuxParCategorieService {

latALon:string="";

  constructor (private http: HttpClient, private geolocation:Geolocation) {
    this.location();
   }

  location(){
    this.geolocation.getCurrentPosition().then((resp)=>{

    this.latALon = resp.coords.latitude.toFixed(4)+","+resp.coords.longitude.toFixed(4);
}).catch((error)=>{
     console.log('error getting location',error);
   });
  }
   getEmplacement(idCat:string)
  {
    return this.http.get(environment.url+'/emplacements/categorie/'+idCat+'/100000/35.5612,-5.3652', { withCredentials: true });  
  }



  
}
