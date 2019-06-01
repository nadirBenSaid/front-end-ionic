import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import {map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import  {DetailsService} from './../../services/details.service';
import { SearchService, SearchType } from './../../services/search.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
   
  public id:string;
  public sysDateDay:string;
  public emplacements:any;
  public barChartLabels:string[] = ['7h','8h','9h','10h',
  '11h','12h','13h',
  '14h','15h','16h',
  '17h','18h','19h','20h','21h','22h','23h'];
  public barChartData:number[] = [ 4 , 2 , 3, 3,
  4 , 2 , 3, 3,4 , 2 , 3, 3,1,2];
  public barChatType:string = 'bar';
  public legend:boolean = false;
  public lineChartOptions: any = {
    scales : {
        yAxes: [{
            ticks: {
            beginAtZero: true,
                stepValue: 10,
                steps: 20,
              max : 3,
            }
        }]
      }
  };
  /* in html*/
  public nomEmplacement:string;
  public adresse:string;

  key: string = '';
  resu: any = [];

    d: Date = new Date();
    // weekday = new Array(7);
    weekday: string[] = ["dimanche", "lundi", "mardi","mercredi","jeudi","vendredi","samedi"];


  constructor(private searchService: SearchService, private alertCtrl: AlertController,public http: HttpClient,public route: ActivatedRoute,private detailsService : DetailsService) {   

    var n = this.weekday[this.d.getDay()];
    this.loadData(n);

    //connected user favorites
    this.searchService.favories().subscribe(
      (data) => {
        this.resu = data;
        console.log(this.resu);
      },
      (error) => {
        console.log(error);
      });
  }

   ngOnInit() {
    
  }

  loadData(day){
    this.id = this.route.snapshot.paramMap.get('id');
    this.detailsService.details(this.id,day).subscribe(data => {
      this.emplacements = data;
      this.nomEmplacement = this.emplacements.emplacement.nomEmplacement;
      this.nomEmplacement = this.emplacements.emplacement.categorie;
      
      this.barChartData = [this.emplacements.stats["7"],this.emplacements.stats["8"], this.emplacements.stats["9"] ,
      this.emplacements.stats["10"], this.emplacements.stats["11"],this.emplacements.stats["12"], this.emplacements.stats["13"] , 
      this.emplacements.stats["14"], this.emplacements.stats["15"],this.emplacements.stats["16"], this.emplacements.stats["17"] , 
      this.emplacements.stats["18"], this.emplacements.stats["19"],this.emplacements.stats["20"], this.emplacements.stats["21"],
      this.emplacements.stats["22"],this.emplacements.stats["23"]];
      this.sysDateDay = day;
          }); 

  }

  onSelect(day) {
    this.loadData(day);
 }

  //change button color if the emp is one of the users favourites
  fColor= "primary";
  colorRed() {
    this.fColor = "danger";
  }
  colorBlue() {
    this.fColor = "primary";
  }
  //add or remove favorites depending on the color (also change color on click)
  addRemovefav(id) {
    if ((<HTMLInputElement>document.getElementById("99" + id)).getAttribute("for") == "danger") {
      console.log('removed');
      this.searchService.removeFromFavourites(id).subscribe(data => {
      }, error => {
        console.log(error);
      });
      (<HTMLInputElement>document.getElementById("9" + id))
        .setAttribute("class", "primary sc-ion-button-md-h md button button-solid ion-activatable ion-focusable hydrated button-small activated");
      (<HTMLInputElement>document.getElementById("99" + id)).setAttribute("for", "primary");
    }
    else {
      this.searchService.addToFavourites(id).subscribe(data => {
        console.log('added');
      }, error => {
        console.log(error);
      });
      (<HTMLInputElement>document.getElementById("9" + id))
        .setAttribute("class", "danger sc-ion-button-md-h md button button-solid ion-activatable ion-focusable hydrated button-small activated");
      (<HTMLInputElement>document.getElementById("99" + id)).setAttribute("for", "danger");
    }
  }
   async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Message',
      message: 'Vote ajouté avec success.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async onGoto(){
   
  const alert = await this.alertCtrl.create({
      header: 'Voter:',
      cssClass: 'alertcss',
      inputs: [    
        {
          name: 'ferme',
          type: 'radio',
          label: 'Fermé',
          value: 3 ,
          checked: true
        },
        {
          name: 'plein',
          type: 'radio',
          label: 'Plein',
          value: 2
        },
        {
          name: 'vide',
          type: 'radio',
          label: 'Vide',
          value: 0
        },
        {
          name: 'moyen',
          type: 'radio',
          label: 'Moyen',
          value: 1
        }
      ],
      buttons : [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.detailsService.voter(data,this.id);
            var n = this.weekday[this.d.getDay()];
            this.loadData(n);
            this.presentAlert();
            }
        }
      ]
    });
  
    await alert.present();
     
  }

}
  
