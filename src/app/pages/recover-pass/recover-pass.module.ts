import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPassPage } from './recover-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverPassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  
  ],
  declarations: [RecoverPassPage],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecoverPassPageModule {}
