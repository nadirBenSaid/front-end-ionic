import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
@Injectable({
  providedIn: 'root'
})

export class LocationsService {
  
  constructor(private http: HttpClient,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy) 
    { 
      this.checkGPSPermission();
    }
    latALonLoc: string = "0";

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
        console.log("lat"+resp.coords.latitude.toFixed(4));
        this.latALonLoc = resp.coords.latitude.toFixed(4) + "," + resp.coords.longitude.toFixed(4);
        console.log(this.latALonLoc);
        return resp.coords.latitude.toFixed(4) + "," + resp.coords.longitude.toFixed(4);
      }).catch((error) => {
        console.log('error getting location', error);
      });
    }


   getUserData()
   {
      return this.http.get(environment.url+'/emplacements/near/'+this.latALonLoc, { withCredentials: true });  
}

}
