import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MineComponent } from './mine/mine.component';
import { RequestRoutingModule } from './request-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from '../services/request.service';
import { ManageComponent } from './manage/manage.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    NewComponent,
    AccueilComponent,
    MineComponent,
    ManageComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule
  ],
  providers:[
    RequestService
  ]
})
export class RequestModule { }
