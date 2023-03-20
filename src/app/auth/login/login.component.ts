import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      'user': new FormControl(''),
      'password': new FormControl('')
    })
  }

  onSubmit(){
    console.log( this.form );
    if( this.form.valid ){
      
    }
  }
}
