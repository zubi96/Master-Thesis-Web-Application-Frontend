import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '',
     component: AdminLayoutComponent,
     canActivate: [AuthGuard],
    children: [{
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule)
    }]},
    { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }
];
