import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from './../../services/categories.service';
import { HttpHeaders , HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
	
 data: Observable<any>;

result: any = [];


 //public catData: Array<{ title: string; id: string; icon: string }> = [];

getData() {
    this.categoriesService.getUserData().subscribe(
      (data)=>{
        console.log(data);
        this.result=data;
      },
      (error) => {
        console.log(error);
      });
  }

  constructor(private categoriesService: CategoriesService,router: Router, public http: HttpClient) {


this.getData();


  }


  ngOnInit() {
  }
 




}