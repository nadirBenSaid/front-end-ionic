import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';

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

  usernameAndPassword:string;
  latALon: string = "";

  constructor(
    private http: HttpClient, 
    public storage: Storage,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy
    ) {
    
    this.location();
  }


//Check if application having GPS access permission  
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        this.requestGPSPermission();
        if (result.hasPermission) {
 
          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        }
      },
      err => {
        alert(err);
      }
    );
  }
 
  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      
    });
  }
 
  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.location()
      }
    );
  }

  location() {
    this.geolocation.getCurrentPosition().then((resp) => {
      //resp.coords.latitude
      //resp.coords.longitude
      this.latALon = resp.coords.latitude.toFixed(4) + "," + resp.coords.longitude.toFixed(4);

    }).catch((error) => {
      console.log('error getting location', error);
    });
  }

  getSearchData(lieu: string): Observable<any> {
    let myHeaders: HttpHeaders = new HttpHeaders();
        myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');

    return this.http.get(environment.url + '/emplacements/query/' + lieu + '/100000/' + this.latALon, {headers: myHeaders, withCredentials: true });
  }

  addToFavourites(empId) {

    let myHeaders: HttpHeaders = new HttpHeaders();
        myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');
    let postData = {
    }
    return this.http.post(environment.url + '/favories/add/' + empId, postData, { headers: myHeaders,withCredentials: true });
  }
  favories() {

    return this.http.get(environment.url + '/favories', { withCredentials: true });
  }

  removeFromFavourites(empId) { 

    let myHeaders: HttpHeaders = new HttpHeaders();
        myHeaders = myHeaders.append('Authorization', 'Basic YWxpOmFsaQ==');  
    let postData = {
    }
    return this.http.post(environment.url + '/favories/delete/' + empId, postData, {  headers: myHeaders, withCredentials: true });
    //delete(environment.url + '/favories/delete/' + empId , { withCredentials: true });
  }

}

