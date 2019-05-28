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


    constructor(private searchService: SearchService, private router: Router, public storage: Storage) { }

  ngOnInit() { }

  id;
  name="ios-star-outline";
  changeIcon(id : any) {
   if ((<HTMLInputElement>document.getElementById(id)).getAttribute("name")=="ios-star-outline") {
    (<HTMLInputElement>document.getElementById(id)).setAttribute("name","ios-star");
   }
   else{
    (<HTMLInputElement>document.getElementById(id)).setAttribute("name","ios-star-outline");
   }
  }

  data: Observable<any>;
  result:any=[];

  getdata() {
    this.searchService.getSearchData(this.searchTerm).subscribe(
      (data)=>{
        console.log(data);
        this.result=data;
      },
      (error) => {
        console.log(error);
      });
    }

    logout() {
        this.storage.clear();
        this.router.navigateByUrl('/home');
    }
}
