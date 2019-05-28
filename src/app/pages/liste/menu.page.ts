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
     this.router.navigate(['/menu/privacy']);
    }
    getLicence(){
    this.router.navigate(['/menu/licence']);
    }
    getAccount(){
      this.router.navigate(['/menu/account']);
      }  
     getPropos(){
          this.router.navigate(['/menu/propos']);
          }   
               

}
