import { Injectable } from '@angular/core';
import { Location } from '../_models/location';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocationService } from '../_services/location.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LocationEditResolver implements Resolve<Location> {
    constructor(private locationService: LocationService, private toastr: ToastrService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Location> {
        return this.locationService.getLocation(route.params.id).pipe(
            catchError(error => {
                this.toastr.error('Problem retrieving your data');
                this.router.navigate(['/locations']);
                return of(null);
            })
        );
    }
}