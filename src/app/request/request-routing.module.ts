import {  NgModule } from "@angular/core";
import { RouterModule,  Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { MineComponent } from "./mine/mine.component";
import { NewComponent } from "./new/new.component";


const routes: Routes = [

    { path: 'accueil', component: AccueilComponent},
    { path: 'new', component: NewComponent},
    { path: 'mine', component: MineComponent},

]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class RequestRoutingModule{
}