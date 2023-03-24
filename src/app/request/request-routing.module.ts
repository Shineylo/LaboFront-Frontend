import {  NgModule } from "@angular/core";
import { RouterModule,  Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { DetailsComponent } from "./details/details.component";
import { ManageComponent } from "./manage/manage.component";
import { MineComponent } from "./mine/mine.component";
import { NewComponent } from "./new/new.component";


const routes: Routes = [

    { path: 'accueil', component: AccueilComponent},
    { path: 'new', component: NewComponent},
    { path: 'mine', component: MineComponent},
    { path: 'manage', component: ManageComponent},
    {path: 'edit/:id', component: DetailsComponent},

]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class RequestRoutingModule{
}