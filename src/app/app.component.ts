import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isToggled = false;
  loggedIn: boolean;
  loginForm: FormGroup;
  formBuilder: any;
  admin: any;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  OnInit() {
  }

  toggleMenu() {
    this.isToggled = !this.isToggled;
  }

  logOut() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    this.router.navigate(['/login']);
    this.toastr.info('Logged out');
  }
}
