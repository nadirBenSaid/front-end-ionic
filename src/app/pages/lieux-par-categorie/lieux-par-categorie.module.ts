import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LieuxParCategoriePage } from './lieux-par-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: LieuxParCategoriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LieuxParCategoriePage]
})
export class LieuxParCategoriePageModule {}
