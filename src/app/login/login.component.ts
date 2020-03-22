import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../data.service";
import {DataStore} from "../data.state";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  form = new FormGroup({
    inputId: new FormControl('', [Validators.required, Validators.minLength(3)]),
    inputLastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    inputBirthday: new FormControl('', [Validators.required]),
  });

  loading = false;

  constructor(private router: Router, private dataService: DataService, private dataStore: DataStore) {
  }

  login() {
    this.loading = true;
    this.dataService.getHash(this.form.value.inputId, this.form.value.inputLastname, this.form.value.inputBirthday).subscribe(hash => {
      this.loading = false;
      this.dataService.getData(hash).subscribe(sample => {
        this.dataStore.setSample(sample);
        this.router.navigate(['result']);
      });
    });
  }
}
