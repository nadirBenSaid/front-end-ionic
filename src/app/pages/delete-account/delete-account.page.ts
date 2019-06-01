import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  constructor(private http: HttpClient,private router: Router,public storage: Storage) { }

  ngOnInit() {
  }
  result;
  deleteAccount(){
    let postData = {}
    return this.http.post(environment.url + '/users/delete', postData, { withCredentials: true }).subscribe(data => {
      this.result=data;
      console.log('deleted');
      console.log(this.result);
      this.gotohome();
    }, error => {
      console.log(error);
    });
  }
  gotohome(){
      this.storage.clear();
      this.router.navigateByUrl('home');
  }

}
