import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    RegisterService
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
