import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy{
  request:any;

  postSubscription!: Subscription;

  constructor(
		private readonly _requestService : RequestService,
    private readonly _activatedRoute: ActivatedRoute
	) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param) => {
      this.postSubscription = this._requestService.getOne(param['id']).subscribe({
        next: (resp) => this.request = resp
      })
    })
  }

  ngOnDestroy(): void {
		this.postSubscription.unsubscribe();
	}
}
