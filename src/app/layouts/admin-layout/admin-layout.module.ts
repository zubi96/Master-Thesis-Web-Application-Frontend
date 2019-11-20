import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from '../admin-layout/admin-layout.routing';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { LocationsComponent } from 'src/app/pages/locations/locations.component';
import { AnalyticsComponent } from 'src/app/pages/analytics/analytics.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    LocationsComponent,
    AnalyticsComponent
  ]
})
export class AdminLayoutModule { }
