import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  form = new FormGroup({
    inputId: new FormControl('', [Validators.required, Validators.minLength(3)]),
    inputLastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    inputBirthdate: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {
  }

  login() {
    this.router.navigate(['result']);
  }
}
