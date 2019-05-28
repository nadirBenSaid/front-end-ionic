import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
      {path:'welcome',
      loadChildren:'../welcome/welcome.module#WelcomePageModule'
      },
     
      {path:'register',
      loadChildren:'../register/register.module#RegisterPageModule'
      },
      {path:'favoris',
      loadChildren:'../favoris/favoris.module#FavorisPageModule'
      },

      {path:'settings',
      loadChildren:'../liste/menu.module#MenuPageModule'
      },
    ]
  },
  {
    path:'',
    redirectTo:'/menu/welcome'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {

}
