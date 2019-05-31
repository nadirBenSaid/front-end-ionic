import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-ajouteremplacement',
  templateUrl: './ajouteremplacement.page.html',
  styleUrls: ['./ajouteremplacement.page.scss'],
})
export class AjouteremplacementPage implements OnInit {

  constructor(private http: HttpClient,private geolocation: Geolocation) { this.location(); }

  ngOnInit() {
  }

  lat; lon;
  location() {
    this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude;
    this.lon= resp.coords.longitude;
    }).catch((error) => {
      console.log('error getting location', error);
    });
  }

  formulaire = { nomEmplacement: "", categorie: "" };
  data: Observable<any>;
  suggerer() {
    let postData = {
      "nomEmplacement": this.formulaire.nomEmplacement,
      "categorie": this.formulaire.categorie,
      "latitude": this.lat,
      "longitude": this.lon
    }
    return this.http.post(environment.url + '/emplacements/add', postData, { withCredentials: true }).subscribe(data => {
      console.log('suggest');
    }, error => {
      console.log(error);
    });
  }
}
