import { SearchService, SearchType } from 'src/app/services/search.service';
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

  resu: any = [];


    constructor(private searchService: SearchService,private lieuxParCategorieService: LieuxParCategorieService,router: Router, private activatedRoute: ActivatedRoute) { 
      this.searchService.favories().subscribe(
      (data) => {
        this.resu = data;
        console.log(this.resu);
      },
      (error) => {
        console.log(error);
      });
  this.getData();
}

fColor= "primary";
  colorRed() {
    this.fColor = "danger";
  }
  colorBlue() {
    this.fColor = "primary";
  }

  //add or remove favorites depending on the color (also change color on click)
  addRemovefav(id) {
    if ((<HTMLInputElement>document.getElementById("99" + id)).getAttribute("for") == "danger") {
      this.searchService.removeFromFavourites(id).subscribe(data => {
        console.log('removed');
      }, error => {
        console.log(error);
      });
      (<HTMLInputElement>document.getElementById("9" + id))
        .setAttribute("class", "primary sc-ion-button-md-h md button button-solid ion-activatable ion-focusable hydrated button-small activated");
      (<HTMLInputElement>document.getElementById("99" + id)).setAttribute("for", "primary");
    }
    else {
      this.searchService.addToFavourites(id).subscribe(data => {
        console.log('added');
      }, error => {
        console.log(error);
      });
      (<HTMLInputElement>document.getElementById("9" + id))
        .setAttribute("class", "danger sc-ion-button-md-h md button button-solid ion-activatable ion-focusable hydrated button-small activated");
      (<HTMLInputElement>document.getElementById("99" + id)).setAttribute("for", "danger");
    }
  }


  ngOnInit() {

  }

 data: Observable<any>;

result: any = [];

 getData() {
  	  	  this.Id = this.activatedRoute.snapshot.paramMap.get('id');

    this.lieuxParCategorieService.getEmplacement(this.Id).subscribe(
      (data)=>{
        console.log(data);
        this.result=data;
      },
      (error) => {
        console.log(error);
        setTimeout(() => {
          this.getData();
          console.log("again");
         }, 1000);
      });
  }

}