import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    result: any = [];
    key: string = 'result';

    constructor(private router: Router, public storage: Storage) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.storage.get(this.key).then((val) => {
                if (val != null && val != undefined) {
                    resolve(true);
                } else {
                    console.log("There is no name stored");
                    this.router.navigateByUrl('/home');
                    resolve(false);
                }
            });
        });
    }
}
