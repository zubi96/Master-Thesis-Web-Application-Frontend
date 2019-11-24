import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CategoriesComponent } from '../../pages/categories/categories.component';
import { LocationsComponent } from '../../pages/locations/locations.component';
import { AnalyticsComponent } from '../../pages/analytics/analytics.component';
import { LocationEditComponent } from 'src/app/pages/locations/location-edit/location-edit.component';
import { LocationEditResolver } from 'src/app/_resolvers/location-edit.resolver';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'locations/:id', component: LocationEditComponent, resolve: {location: LocationEditResolver}},
    { path: 'analytics', component: AnalyticsComponent },
];
