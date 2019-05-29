import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  result:any=[];
  key:string='result';

  constructor(public storage: Storage) {
    this.storage.get(this.key).then((val) => {
      if (val != null && val != undefined) {
        this.result=JSON.parse(val);
        }
   });

  }

  ngOnInit() {
  }


  postData(form){
    console.log(this.result.username);
    console.log(this.result.nom);
    console.log(this.result.prenom);
    console.log(this.result.email);
    console.log(this.result.adresse);
    console.log(this.result.ville);
  }

}
