import { inject, NgModule } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes, CanMatchFn, Route, CanLoadFn, CanActivateChildFn } from "@angular/router";
import { AuthModule } from "./auth.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'register', component:RegisterComponent}

]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class AuthRoutingModule{
}