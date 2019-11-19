import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loggedIn: boolean;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

  ngOnChange() {
    this.loggedIn = this.authService.loggedIn();
  }
}
