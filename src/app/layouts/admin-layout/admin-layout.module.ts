import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from '../admin-layout/admin-layout.routing';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { LocationsComponent } from 'src/app/pages/locations/locations.component';
import { AnalyticsComponent } from 'src/app/pages/analytics/analytics.component';
import { LocationCardComponent } from 'src/app/pages/locations/location-card/location-card.component';
import { LocationEditComponent } from 'src/app/pages/locations/location-edit/location-edit.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgmCoreModule } from '@agm/core';
import { ImageUploaderModule } from 'ngx-image-uploader';
import { NgxGalleryModule } from 'ngx-gallery';
import { LocationMapComponent } from 'src/app/pages/locations/location-map/location-map.component';
import { LocationPhotoComponent } from 'src/app/pages/locations/location-photo/location-photo.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKVKCetNWpubLKp_25s8spY91jcbbcmQ4'
    }),
    ImageUploaderModule,
    NgxGalleryModule,
    FileUploadModule
  ],
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    LocationsComponent,
    LocationEditComponent,
    AnalyticsComponent,
    LocationCardComponent,
    LocationMapComponent,
    LocationPhotoComponent
  ]
})
export class AdminLayoutModule { }
