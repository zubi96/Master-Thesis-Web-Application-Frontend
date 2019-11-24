import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from 'src/app/_models/location';
import { LocationService } from 'src/app/_services/location.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {
  @Input() location: Location;
  @ViewChild('editMapForm', {static: true}) editMapForm: NgForm;

  constructor(private locationService: LocationService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  markerDragEnd($event: MouseEvent) {
    // tslint:disable: no-string-literal
    this.location.lat = $event['coords'].lat;
    this.location.lng = $event['coords'].lng;
    this.editMapForm.form.markAsDirty();
  }

  saveMap() {
    this.locationService.updateLocation(this.location.id, this.location).subscribe(() => {
      this.toastr.success('Map info updated successfully');
    }, error => {
      this.toastr.error(error);
    });
    this.editMapForm.form.markAsPristine();
  }

}
