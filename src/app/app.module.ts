import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './_services/auth.service';
import { CategoryService } from './_services/category.service';
import { LocationService } from './_services/location.service';
import { LocationEditResolver } from './_resolvers/location-edit.resolver';

export function tokenGetter() {
   return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig  {
   overrides = {
       pinch: { enable: false },
       rotate: { enable: false }
   };
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AdminLayoutComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/auth']
         }
      }),
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 3000
      }),
      ReactiveFormsModule
   ],
   providers: [ErrorInterceptorProvider, AuthService, CategoryService,
               LocationService, LocationEditResolver, { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }],
   bootstrap: [AppComponent]
})
export class AppModule { }