import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { min } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';


function dateABeforeDateB(inputA: string, inputB: string): ValidatorFn {

  return (form: AbstractControl) => {

    const valueA = form.value[inputA];
    const valueB = form.value[inputB];

    if( new Date("01/01/1970 "+valueA).getTime() < new Date("01/01/1970 "+valueB).getTime() )
      return null;

    return {
      dateBBeforeA : "message"
    }
  }

}

function inFutureDays( days:number ): ValidatorFn{
  return (control: AbstractControl) => {
    let minDate = new Date()
    minDate.setDate( minDate.getDate()+days )
    minDate = new Date( minDate.getFullYear(), minDate.getMonth(), minDate.getDate() )
    const inputValue = new Date(control.value);
    
    if( inputValue >= minDate )
      return null;
    return {
      notInFuture :"Date was not in the future"
    }
  }
}

function minTime(minHour: number,minMinutes:number):ValidatorFn{
  return (control: AbstractControl) => {
    const inputTime = new Date("01/01/1970 "+control.value);

    if(inputTime.getHours()>=minHour && inputTime.getMinutes()>=minMinutes){
      return null;
    }
    return {
      timeBeforeOpen : "Time is before opening"
    }
  }
}

function maxTime(maxHour: number,maxMinutes:number):ValidatorFn{
  return (control: AbstractControl) => {
    const inputTime = new Date("01/01/1970 "+control.value);

    if(inputTime.getHours()<=maxHour && inputTime.getMinutes()<=maxMinutes){
      return null;
    }
    return {
      timeAfterOpen : "Time is after opening"
    }
  }
}

function notWE():ValidatorFn{
  return (control: AbstractControl) => {
    const inputValue = new Date(control.value);

    if(inputValue.getDay() != 6 && inputValue.getDay() !=  0){
      return null;
    }
    return {
      duringWE : "Date is during week end"
    }
  }
}


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{
  form!: FormGroup;
  dropdownList:any[] = [];
  dropdownSettings:IDropdownSettings={};

  constructor(private readonly _requestService: RequestService){
    
  }

  ngOnInit() {
    this.form = new FormGroup({
      'neededCapacity': new FormControl('', [Validators.min(5), Validators.max(300)]),
      'justification': new FormControl(''),
      'date': new FormControl('', [Validators.required,inFutureDays(3),notWE()]),
      'beginAt': new FormControl('', [Validators.required, minTime(8,0),maxTime(17,30)]),
      'endAt': new FormControl('', [Validators.required,minTime(8,30), maxTime(18,0)]),
      'materialIds': new FormControl([])
    },
    {
      validators: dateABeforeDateB('beginAt', 'endAt')
    });
    this._requestService.getAllMaterial().subscribe({
      next: (resp) => this.dropdownList = resp
    })
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };
  }


  onSubmit(){
    console.log(this.form);
    if( this.form.valid ){
      const data = {
        ...this.form.value,
        userLogin : localStorage.getItem("username"),
        materialIds : this.form.value.materialIds.map((value:any)=> {
          return value.id
        })
      }
      this._requestService.create( data ).subscribe( () => this.form.reset() )
    }
  }


}
