import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReclamerPage } from './reclamer.page';

import { ReclamerService } from 'src/app/services/reclamer.service';
import{HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/Storage';
import{HttpModule} from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: ReclamerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule, 
    IonicStorageModule.forRoot(),
    RouterModule.forChild(routes)
  ],
   providers: [
    ReclamerService

  ],
  declarations: [ReclamerPage]
})
export class ReclamerPageModule {}
