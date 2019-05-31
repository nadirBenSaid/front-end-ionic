import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from "@angular/router";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  result:any=[];
  result2:any=[];
  key:string='result';
  data:Observable<any>;

  constructor(private router: Router, public http: HttpClient, public storage: Storage) {
    this.storage.get(this.key).then((val) => {
      if (val != null && val != undefined) {
        this.result=JSON.parse(val);
        }
   });
  }
  ngOnInit() {}

  postData(form){
    var url=environment.url+'/users/update';

    let postData = {
            "id": this.result.id,
            "username": this.result.username,
            "nom": this.result.nom,
            "prenom": this.result.prenom,
            "email": this.result.email,
            "adresse": this.result.adresse,
            "ville": this.result.ville,
            "roles":[
              {
                "roleId":2,
                "role":"USER"
              }
            ]
    }

    this.http.post(url, postData, {withCredentials: true} )
      .subscribe(data => {
        this.result.message="Data updated successfully...";
        this.storage.clear();
        this.result2=data;
        this.storage.set('result', JSON.stringify(this.result2.user));
        this.router.navigateByUrl('/search');
       }, error => {
        console.log(error);
      });
  }
    

}
