import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ReclamerService } from './../../services/reclamer.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Http, Headers, RequestOptions} from '@angular/http';



@Component({
  selector: 'app-reclamer',
  templateUrl: './reclamer.page.html',
  styleUrls: ['./reclamer.page.scss'],
})
export class ReclamerPage implements OnInit {

  formulaire = { titre: "", message: ""};


  constructor(private router: Router, public http: HttpClient, private reclamerService: ReclamerService) {
  }

ngOnInit(){
}

reclamer(form){
  
var titre = this.formulaire.titre;
var message = this.formulaire.message;
this.reclamerService.reclamer(titre,message);
this.router.navigateByUrl('/menu/reclamer');

}
}