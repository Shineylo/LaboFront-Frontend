import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  anyUserConnected?: string;

  constructor(private readonly _clientService: ClientService){
    this._clientService.anyUserConnected.subscribe(user => this.anyUserConnected = user) 
  }

}
