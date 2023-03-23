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
      'capacity': new FormControl(''),
      'justification': new FormControl(''),
      'start': new FormControl(''),
      'end': new FormControl(''),
      'material': new FormControl([])
    });
  }

  ngOnInit() {
    this._requestService.getAll().subscribe({
      next: (resp) => this.dropdownList = resp
    })
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };
  }


  onSubmit(){
    console.log("cc");
  }


}
