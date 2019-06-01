import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
 
import { MenuPage } from './menu.page';
import { AuthGuard } from './../../services/guards/auth.guard';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/search',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'search',
        loadChildren: '../search/search.module#SearchPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'categories',
        loadChildren: '../categories/categories.module#CategoriesPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'favoris',
        loadChildren: '../favoris/favoris.module#FavorisPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'reclamer',
        loadChildren: '../reclamer/reclamer.module#ReclamerPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: ':id/details',
        loadChildren: '../details/details.module#DetailsPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'lieux-par-categorie/:id', 
        loadChildren: '../lieux-par-categorie/lieux-par-categorie.module#LieuxParCategoriePageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'locations', 
        loadChildren: '../locations/locations.module#LocationsPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'settings', 
        loadChildren: '../settings/menu.module#MenuPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'licence', 
        loadChildren: '../licence/licence.module#LicencePageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'account', 
        loadChildren: '../account/account.module#AccountPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'delete-account', 
        loadChildren: '../delete-account/delete-account.module#DeleteAccountPageModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'propos', 
        loadChildren: '../propos/propos.module#ProposPageModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ MenuPage ]
})
export class MenuPageModule {}
