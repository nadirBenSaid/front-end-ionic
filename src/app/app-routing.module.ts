import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';
import { GuestGuard } from './services/guards/guest.guard';

// AuthGuard: c�d: il faut faire la connexion pour consulter la page
// GuestGuard: c�d: il faut etre d�connect� pour consulter la page

const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full'},
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [GuestGuard] },
    // { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule', canActivate: [AuthGuard] },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule', canActivate: [GuestGuard]},
  { path: 'recover-pass', loadChildren: './pages/recover-pass/recover-pass.module#RecoverPassPageModule' },
  // { path: 'reclamer', loadChildren: './pages/reclamer/reclamer.module#ReclamerPageModule' },
    // { path: 'favoris', loadChildren: './pages/favoris/favoris.module#FavorisPageModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [GuestGuard]},
    // { path: ':id/details', loadChildren: './pages/details/details.module#DetailsPageModule' , canActivate: [AuthGuard]},
//  { path: 'lieux-par-categorie/:id', loadChildren: './pages/lieux-par-categorie/lieux-par-categorie.module#LieuxParCategoriePageModule' , canActivate: [AuthGuard]},
  // { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule', canActivate: [AuthGuard] },
  // { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  // { path: 'locations', loadChildren: './pages/locations/locations.module#LocationsPageModule' , canActivate: [AuthGuard] },
  { path: 'licence', loadChildren: './pages/licence/licence.module#LicencePageModule' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
  { path: 'delete-account', loadChildren: './pages/delete-account/delete-account.module#DeleteAccountPageModule' },
  { path: 'propos', loadChildren: './pages/propos/propos.module#ProposPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'ajouteremplacement', loadChildren: './pages/ajouteremplacement/ajouteremplacement.module#AjouteremplacementPageModule' },
  // { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
