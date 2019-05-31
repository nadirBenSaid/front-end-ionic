import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationsService } from './../../services/locations.service';
import { HttpHeaders , HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
	
 
 data:Observable<any>;
 result: any=[];
isCafe = false;

 //public catData: Array<{ title: string; id: string; icon: string }> = [];

getData() {
    this.locationsService.getUserData().subscribe(
      (data)=>{
        console.log(data);
        this.result=data;
       
    


      },
      (error) => {
        console.log(error);
      });
  }
 
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 5; i++) { 
        this.result.push(this.result.emplacements);
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.result.emplacements == 1000) {
        event.target.disabled = true;
      }
    }, 500);
    
  }
  

  constructor(private locationsService: LocationsService,router: Router, public http: HttpClient) {
    this
    

this.getData();


  }


  ngOnInit() {
  }
  




}