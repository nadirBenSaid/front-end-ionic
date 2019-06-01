import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  pages = [
    {
      title: 'Accueil',
      url: '/menu/search',
      icon: 'home'
    },
    {
      title: 'Mon profil',
      url: '/menu/profile',
      icon: 'person'
    },
   
    {
      title: 'Categories',
      url: '/menu/categories',
      icon: 'list-box'
    },
    {
      title: 'Mes favoris',
      url: '/menu/favoris',
      icon: 'star'
    },
    {
      title: 'emplacements',
      url: '/menu/locations',
      icon: 'pin'
    },
    {
      title: 'Reclamer',
      url: '/menu/reclamer',
      icon: 'alert'
    },
    {
      title: 'Parametres',
      url: '/menu/settings',
      icon: 'settings'
    },
   
  ];
 
  constructor(private router: Router, public storage: Storage) { }
 
  ngOnInit() {
  }

  logout() {
    this.storage.clear();
    this.router.navigateByUrl('/home');
  }
 
}