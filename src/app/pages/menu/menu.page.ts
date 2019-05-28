import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages=[
    {
      icon:'home',
      title:'Accueil',
      url:'/menu/home'
    },
    {
      icon:'person',
      title:'Mon profil',
      url:'/menu/profil'
    },
    {
      icon:'star',
      title:'Mes favoris',
      url:'/menu/favoris'
    },
    {
      icon:'list-box',
      title:'Categories',
      url:'/menu/categories'
    },
    {
      icon:'settings',
      title:'Paramètres',
      url:'/menu/settings'
    },
    {
      icon:'alert',
      title:'Réclamation',
      url:'/menu/reclamer'
    }

  ];

  selectedPath='';
  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
         this.selectedPath=event.url;
    });
   }

  ngOnInit() {
  }

}
