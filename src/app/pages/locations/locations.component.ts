import { Component, OnInit, TemplateRef } from '@angular/core';
import { LocationService } from 'src/app/_services/location.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from 'src/app/_models/location';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  categories: Category[];
  modalRef: BsModalRef;
  model: any = {};

  constructor(private locationService: LocationService, private categoryService: CategoryService,
              private toastr: ToastrService, private modalService: BsModalService) { }

  ngOnInit() {
    this.loadCategories();
    this.loadLocations();
  }

  loadLocations() {
    this.locationService.getLocations().subscribe((response) => {
      this.locations = response;
    }, error => {
      this.toastr.error(error);
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      if (response) {
        this.categories = response;
        this.model.categoryId = this.categories[0].id;
      }
    }, error => {
      this.toastr.error(error);
    });
  }

  createLocationModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirmCreation() {
    this.locationService.createLocation(this.model).subscribe((response) => {
      this.toastr.success('Location created successfully');
      this.loadLocations();
    }, error => {
      this.toastr.error(error);
    });
    this.model.categoryId = this.categories[0].id;
    this.model.name = '';
    this.close();
  }

  close() {
    this.modalRef.hide();
  }

}
