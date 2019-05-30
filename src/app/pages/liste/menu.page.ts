import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import{ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {
    
  constructor(   private router :Router) {
}
    getPrivacy(){
     this.router.navigate(['menu']);
    }
    getLicence(){
    this.router.navigate(['licence']);
    }
    getAccount(){
      this.router.navigate(['account']);
      } 
      getLanguage(){
        this.router.navigate(['langage']);
        } 
        getPropos(){
          this.router.navigate(['propos']);
          }      

}
