import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl = environment.baseUrl + 'dashboard/';

  constructor(private http: HttpClient) { }

  getNumberOfLocations() {
    return this.http.get(this.apiUrl + 'getNumberOfLocations');
  }

  getNumberOfUsers() {
    return this.http.get(this.apiUrl + 'getNumberOfUsers');
  }

  getTodayDiscoveredLocations() {
    return this.http.get(this.apiUrl + 'getTodayDiscoveredLocations');
  }
}
