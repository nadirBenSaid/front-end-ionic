import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { error } from '@angular/compiler/src/util';
import { LoginService } from './../../services/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    formulaire = { username: "", password: "" };
    result: any = [];
    key: string = 'result';
    data: Observable<any>;

    constructor(private router: Router, public http: HttpClient, public storage: Storage, private loginService: LoginService) {
    }

    ngOnInit() {
    }

    login(form) {
        var username = this.formulaire.username;
        var password = this.formulaire.password;

        this.loginService.authenticate(username, password).subscribe(data => {
            this.result = data;
            this.storage.set(this.key, JSON.stringify(this.result.user));
            this.storage.set('connexion', btoa(username+':'+password));
    //        console.log(this.result.user.id);

            this.router.navigateByUrl('/search');
        },
            error => {
                this.result = { "error": "Echec d'authentification !" };
            });

    }

}
