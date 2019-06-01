import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../../services/register.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  result: any = [];

  registerForm: FormGroup;

  villes: string[];

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    public toastController: ToastController,
    private router:Router,
    private loginService: LoginService,
    public storage: Storage
  ) { }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  ngOnInit(): void {

    this.villes = [

      "Tanger",
      "Tetouan",
      "Guelmim",
      "Rabat",
      "Casablanca",
      "Agadir",
      "Marrakech",
      "Autres"
    ];
    this.registerForm = this.formBuilder.group({
      nom: ["", [Validators.required, Validators.minLength(3)]],
      prenom: ["", [Validators.required, Validators.minLength(3)]],
      username: ["", [Validators.required, Validators.minLength(3)]],
      motDePasse: ["", [Validators.required, Validators.minLength(5)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email, Validators.minLength(5)]],
      adresse: ["", [Validators.required, Validators.minLength(5)]],
      ville: ["", [Validators.required]]
    }, {
        validator: this.MustMatch("motDePasse", "confirmPassword")
      });
  }

  async register() {
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
      const toast = await this.toastController.create({
        message: 'Formulaire incorrect.',
        duration: 2000
      });
      toast.present();
      return;
    }
    let formData = {
      "adresse": this.registerForm.value.adresse,
      "email": this.registerForm.value.email,
      "motDePasse": this.registerForm.value.motDePasse,
      "nom": this.registerForm.value.nom,
      "prenom": this.registerForm.value.prenom,
      "username": this.registerForm.value.username,
      "ville": this.registerForm.value.ville,
      "roles": [{
        "roleId": 2,
        "role": "USER"
      }
      ]
    }
    this.registerService.register(formData).subscribe(
      async (data) => {
        const toast = await this.toastController.create({
          message: 'Compte crée avec succes',
          duration: 2000
        });
        toast.present();
        this.registerForm.reset();

    
          var username1 = formData.username;
          var password1 = formData.motDePasse;
  
          this.loginService.authenticate(username1, password1).subscribe(data => {
              this.result = data;
              this.storage.set('result', JSON.stringify(this.result.user));
               console.log(this.result.user.id);
  
              this.router.navigateByUrl('/menu/search');
          },
              error => {
                  this.result = { "error": "Echec d'authentification !" };
              });
  
      



      },
      async (error) => {
        const toast = await this.toastController.create({
          message: 'Une erreur est survenue de l\'inscription !',
          duration: 2000
        });
        toast.present();
      },
      () => {
      }

    );
  }
}



