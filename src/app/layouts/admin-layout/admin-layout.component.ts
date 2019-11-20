import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  isToggled = false;
  loggedIn: boolean;
  formBuilder: any;
  admin: any;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isToggled = !this.isToggled;
  }

  logOut() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    this.router.navigate(['/login']);
  }

}
