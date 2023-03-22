import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  badcredentials: boolean = false;

  constructor(private readonly _loginService: LoginService, private readonly _router : Router){
    this.form = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    })
  }

  onSubmit(){
    console.log( this.form );
    if( this.form.valid ){
      this._loginService.login(this.form.value).subscribe(
        {
          next: value => this._router.navigateByUrl("auth/register"),
          error: (error) => this.badcredentials = true
          
        }
      )
      this.form.reset({
        'user': "",
        'password': ""
      });
    }
  }
}
