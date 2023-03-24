import { Component, OnInit} from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit{
  requests:any[] = [];

  constructor(private readonly _requestService: RequestService){};

  ngOnInit() {
    this._requestService.getRequests("PENDING").subscribe({
      next: (resp) => this.requests = resp
    })
  }
}
