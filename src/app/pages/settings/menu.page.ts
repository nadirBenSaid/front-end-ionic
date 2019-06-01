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
   
    getLicence(){
    this.router.navigate(['licence']);
    }
    deleteAccount(){
      this.router.navigate(['delete-account']);
      } 
        getPropos(){
          this.router.navigate(['propos']);
          }      

}
