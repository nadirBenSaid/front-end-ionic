import { Component, OnInit } from '@angular/core';
import { FavorisService } from 'src/app/services/favoris.service';
import { SearchService, SearchType } from 'src/app/services/search.service';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {
  initialiseInvites() {
    throw new Error("Method not implemented.");
  }

  favoris: any[];
  navigationSubscription: any;
  router: any;

  constructor(private searchService: SearchService, favorisService: FavorisService, private route: Router) {
    favorisService.getFavoris().subscribe(
      res => {
        console.log(res);
        this.favoris = res.emplacements;
      },

      err => {
        console.log(err);
      }
    )
    
  }
  defavoriser(id: any) {
    this.searchService.removeFromFavourites(id).subscribe(data => {
      console.log('removed');
      this.favoris = this.favoris.filter((emp) => {
        return emp.id != id;
      })
    }, error => {
        console.log(error);
      });
  }

  ngOnInit() {

  }
}