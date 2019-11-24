import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Location } from 'src/app/_models/location';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from 'src/app/_services/location.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-location-photo',
  templateUrl: './location-photo.component.html',
  styleUrls: ['./location-photo.component.css']
})
export class LocationPhotoComponent implements OnInit {
  @Input() location: Location;
  modalRef: BsModalRef;
  photoId: number;
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.baseUrl;

  constructor(private locationService: LocationService, private toastr: ToastrService, private modalService: BsModalService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'locations/photos/' + this.location.id,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
        };
        this.location.photos.push(photo);
      }
    };
  }

  deletePhotoModal(id: number, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.photoId = id;
  }

  confirmDeletion() {
    this.locationService.deletePhoto(this.photoId).subscribe(() => {
      this.toastr.success('Photo deleted successfully');
      this.location.photos.splice(this.location.photos.findIndex(p => p.id === this.photoId), 1);
    }, error => {
      this.toastr.error(error);
    });
    this.close();
  }

  close() {
    this.modalRef.hide();
  }

}
