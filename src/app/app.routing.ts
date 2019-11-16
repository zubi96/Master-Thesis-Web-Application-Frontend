import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';


export const appRoutes: Routes = [
    { path: '', component: DashboardComponent, runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
];
