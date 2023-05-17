import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  user: User = {
    Id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  confirmPassword: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  goBack(): void {
    this.location.back();
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      const password = this.registerForm.value.password;
      this.user.firstName = this.registerForm.value.firstName;
      this.user.lastName = this.registerForm.value.lastName;
      this.user.email = this.registerForm.value.email;
      this.user.password = password;

      if (password === this.registerForm.value.confirmPassword) {
        this.userService.register(this.user);
        this.router.navigate(['/login']); // Redirect to the login page
      } else {
        this.errorMessage = "Password and confirm password don't match";
      }
    } else {
      console.log('Invalid form');
    }
  }
}
