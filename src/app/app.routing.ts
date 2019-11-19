import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CategoriesComponent } from './categories/categories.component';
import { LocationsComponent } from './locations/locations.component';


export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard] },
    { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
    { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent },
];
