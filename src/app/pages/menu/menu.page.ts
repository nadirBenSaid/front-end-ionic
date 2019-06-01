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
      title: 'Mon profil',
      url: '/menu/profile',
      icon: 'home'
    },
    {
      title: 'Search',
      url: '/menu/search',
      icon: 'home'
    },
    {
      title: 'Categories',
      url: '/menu/categories',
      icon: 'logo-ionic'
    },
    {
      title: 'Mes favoris',
      url: '/menu/favoris',
      icon: 'logo-ionic'
    },
    {
      title: 'emplacements',
      url: '/menu/locations',
      icon: 'logo-ionic'
    },
    {
      title: 'Reclamer',
      url: '/menu/reclamer',
      icon: 'logo-ionic'
    },
    {
      title: 'Licence',
      url: '/menu/licence',
      icon: 'logo-ionic'
    },
    {
      title: 'A propos',
      url: '/menu/propos',
      icon: 'logo-ionic'
    }
  ];
 
  constructor(private router: Router, public storage: Storage) { }
 
  ngOnInit() {
  }

  logout() {
    this.storage.clear();
    this.router.navigateByUrl('/home');
  }
 
}