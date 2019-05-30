import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import {map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import  {DetailsService} from './../../services/details.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
   
  public id:string;
  public sysDateDay:string;
  public emplacements:any;
  public barChartLabels:string[] = ['8h','9h','10h',
  '11h','12h','13h',
  '14h','15h','16h',
  '17h','18h','19h','20h','21h'];
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
  

  constructor(private alertCtrl: AlertController,public http: HttpClient,public route: ActivatedRoute,private detailsService : DetailsService) { 
      var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "dimanche";
    weekday[1] = "lundi";
    weekday[2] = "mardi";
    weekday[3] = "mercredi";
    weekday[4] = "jeudi";
    weekday[5] = "vendredi";
    weekday[6] = "samedi";

    var n = weekday[d.getDay()];
    this.loadData(n);
  }

   ngOnInit() {
    
  }

  loadData(day){
    this.id = this.route.snapshot.paramMap.get('id');
    this.detailsService.details(this.id,day).subscribe(data => {
      this.emplacements = data;
      this.nomEmplacement = this.emplacements.emplacement.nomEmplacement;
      this.nomEmplacement = this.emplacements.emplacement.categorie;
      
      this.barChartData = [this.emplacements.stats["8"], this.emplacements.stats["9"] ,
      this.emplacements.stats["10"], this.emplacements.stats["11"],this.emplacements.stats["12"], this.emplacements.stats["13"] , 
      this.emplacements.stats["14"], this.emplacements.stats["15"],this.emplacements.stats["16"], this.emplacements.stats["17"] , 
      this.emplacements.stats["18"], this.emplacements.stats["19"],this.emplacements.stats["20"], this.emplacements.stats["21"]];
      this.sysDateDay = day;
          }); 

  }

 
  onSelect(day) {
    this.loadData(day);
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
          value: 1 ,
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
          value: 3
        },
        {
          name: 'moyen',
          type: 'radio',
          label: 'Moyen',
          value: 4
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
            this.detailsService.voter(data);
            }
        }
      ]
    });
  
    await alert.present();
     
  }
 
}
  
