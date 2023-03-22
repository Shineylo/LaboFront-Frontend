import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  anyUserConnected?: string;

  constructor(private readonly _clientService: ClientService){
    this._clientService.anyUserConnected.subscribe(user => this.anyUserConnected = user) 
  }

}
