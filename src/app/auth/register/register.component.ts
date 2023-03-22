import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    })
  }

  onSubmit(){
    
  }
}
