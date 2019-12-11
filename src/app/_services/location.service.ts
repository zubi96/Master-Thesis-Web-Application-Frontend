import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Location } from '../_models/location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl = environment.baseUrl + 'locations/';

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl);
  }

  getLocation(id: number) {
    return this.http.get<Location>(this.apiUrl + id);
  }

  createLocation(location: Location) {
    return this.http.post(this.apiUrl, location);
  }

  updateLocation(id: number, location: Location) {
    return this.http.put(this.apiUrl + id, location);
  }

  deleteLocation(id: number) {
    return this.http.delete(this.apiUrl + id);
  }

  deletePhoto(id: number) {
    return this.http.delete(this.apiUrl + 'photos/' + id);
  }

  getQRCodeBase64(id: number) {
    return this.http.get(this.apiUrl + 'getQRCode/' + id);
  }
}
