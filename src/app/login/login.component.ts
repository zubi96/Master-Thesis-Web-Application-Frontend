import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { Admin } from '../_models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  admin: Admin;

  constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.admin = Object.assign({}, this.loginForm.value);
      this.authService.login(this.admin).subscribe(() => {
        this.toastr.success('Logged in successfully!');
        this.router.navigate(['/dashboard']);
      }, error => {
        this.toastr.error(error);
      }
      );
    }
  }

}
