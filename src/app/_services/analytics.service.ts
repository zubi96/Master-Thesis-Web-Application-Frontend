import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LocationScanCount } from '../_models/location-scan-count';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  apiUrl = environment.baseUrl + 'analytics/';

  constructor(private http: HttpClient) { }

  getUsersGenderCount() {
    return this.http.get(this.apiUrl + 'getUsersGenderCount');
  }

  getUsersAgeCount() {
    return this.http.get(this.apiUrl + 'getUsersAgeCount');
  }

  getUsersCountryCount() {
    return this.http.get(this.apiUrl + 'getUsersCountryCount');
  }

  getScansByMonth() {
    return this.http.get(this.apiUrl + 'getScansByMonth');
  }

  getLocationsWithTimesScanned(): Observable<LocationScanCount[]> {
    return this.http.get<LocationScanCount[]>(this.apiUrl + 'getLocationsWithTimesScanned');
  }
}
