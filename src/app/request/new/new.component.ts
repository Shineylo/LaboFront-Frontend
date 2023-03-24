import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{
  form: FormGroup;
  dropdownList:any[] = [];
  dropdownSettings:IDropdownSettings={};

  constructor(private readonly _requestService: RequestService){
    this.form = new FormGroup({
      'neededCapacity': new FormControl(''),
      'justification': new FormControl(''),
      'date': new FormControl(''),
      'beginAt': new FormControl(''),
      'endAt': new FormControl(''),
      'materialIds': new FormControl([])
    });
  }

  ngOnInit() {
    this._requestService.getAllMaterial().subscribe({
      next: (resp) => this.dropdownList = resp
    })
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };
  }


  onSubmit(){
    if( this.form.valid ){
      console.log(this.form);
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
