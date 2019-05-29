import { SearchService, SearchType } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  resu: any = [];
  constructor(private searchService: SearchService, private router: Router, public storage: Storage) {
    //connected user favorites
    this.searchService.favories().subscribe(
      (data) => {
        this.resu = data;
        console.log(this.resu);
      },
      (error) => {
        console.log(error);
      });
  }

  //change button color if the emp is one of the users favourites
  fColor;
  colorRed() {
    this.fColor = "danger";
  }
  colorBlue() {
    this.fColor = "primary";
  }

  //to remove
  fun1() { console.log('fun1') }
  fun2() { console.log('fun2') }

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
      if (this.newFav.indexOf(id) !== -1) this.newFav.splice(this.newFav.indexOf(id), 1); 
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
      this.newFav.indexOf(id) === -1 ? this.newFav.push(id) : console.log("This item already exists");
    }
  }

  data: Observable<any>;
  result: any = [];
  newFav: any = [];

  //turn the color of the button to red if it selected (serch for some thig than come back and search for it again)
  lastfav() {
    this.newFav.forEach(function (element) {
      (<HTMLInputElement>document.getElementById("9" + element))
      .setAttribute("class", "danger sc-ion-button-md-h md button button-solid ion-activatable ion-focusable hydrated button-small activated");
      (<HTMLInputElement>document.getElementById("99" + element)).setAttribute("for", "danger");
    });
  }
  
  //gettin search data and calling lastfav after 2s
  getdata() {
    this.searchService.getSearchData(this.searchTerm).subscribe(
      (data) => {
        this.result = data;
        setTimeout(() => {
          this.lastfav();
        }, 2000);
      },
      (error) => {
        console.log(error);
      });
    }
    
    logout() {
      this.storage.clear();
      this.router.navigateByUrl('/home');
    }
    ngOnInit() { }
}
