import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LieuxParCategorieService } from './../../services/lieux-par-categorie.service';
import { HttpHeaders , HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lieux-par-categorie',
  templateUrl: './lieux-par-categorie.page.html',
  styleUrls: ['./lieux-par-categorie.page.scss'],
})
export class LieuxParCategoriePage implements OnInit {
 Id = null;



    constructor(private lieuxParCategorieService: LieuxParCategorieService,router: Router, private activatedRoute: ActivatedRoute) { 
  this.getData();
}

  ngOnInit() {

  }

  public data=[];

 public result=[];


  getData() {
  	  	  this.Id = this.activatedRoute.snapshot.paramMap.get('id');

    this.lieuxParCategorieService.getEmplacement(this.Id).subscribe(
      (data)=>{
        console.log(data);
        this.result=data;
      },
      (error) => {
        console.log(error);
      });
  }

}