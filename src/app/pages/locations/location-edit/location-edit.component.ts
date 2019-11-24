import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/_services/location.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from 'src/app/_models/location';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';
import { NgForm } from '@angular/forms';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {
  @ViewChild('editBasicInfoForm', {static: true}) editBasicInfoForm: NgForm;
  locationId: any;
  location: Location;
  categories: Category[];


  constructor(private route: ActivatedRoute, private locationService: LocationService, private toastr: ToastrService,
              private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.location = data.location;
    });
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    }, error => {
      this.toastr.error(error);
    });
  }

  saveBasicInfo() {
    this.locationService.updateLocation(this.location.id, this.location).subscribe(() => {
      this.toastr.success('Location basic info updated successfully');
      this.editBasicInfoForm.form.markAsPristine();
    }, error => {
      this.toastr.error(error);
    });
  }
}
