import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CategoriesComponent } from '../../pages/categories/categories.component';
import { LocationsComponent } from '../../pages/locations/locations.component';
import { AnalyticsComponent } from '../../pages/analytics/analytics.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'analytics', component: AnalyticsComponent },
];
