import { Component, OnInit, Input, TemplateRef, EventEmitter, Output } from '@angular/core';
import { Location } from 'src/app/_models/location';
import { LocationService } from 'src/app/_services/location.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {
  @Input() location: Location;
  modalRef: BsModalRef;
  locationId: number;
  @Output() loadLocations = new EventEmitter();
  mainPhotoUrl: string;

  constructor(private locationService: LocationService, private toastr: ToastrService, private modalService: BsModalService) { }

  ngOnInit() {
    if (this.location.photos.length > 0) {
      this.mainPhotoUrl = this.location.photos[0].url;
    }
  }

  deleteCategoryModal(id: number, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.locationId = id;
  }

  confirmDeletion() {
    this.locationService.deleteLocation(this.locationId).subscribe(() => {
      this.toastr.success('Location deleted successfully');
      this.loadLocations.next();
    }, error => {
      this.toastr.error(error);
    });
    this.close();
  }

  close() {
    this.modalRef.hide();
  }

  getQrCode() {
    this.locationService.getQRCodeBase64(this.location.id).subscribe(response => {
      this.toastr.success('QR code generated!');
      const QRCodeBase64 = response['value'];

      const link = document.createElement('a');
      link.href = 'data:image/png;base64,' + QRCodeBase64;
      link.download = 'QRCode - ' + this.location.name;
      link.click();
    });
  }
}
