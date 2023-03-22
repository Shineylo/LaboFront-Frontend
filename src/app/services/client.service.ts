import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClientService {

  private anyUserConnectedSource = new BehaviorSubject("");
  public anyUserConnected = this.anyUserConnectedSource.asObservable();

  constructor() { }

  connection(user: string){
    this.anyUserConnectedSource.next(localStorage.getItem("role")??"");
  }

  deconnection(){
    localStorage.clear();
    this.anyUserConnectedSource.next("");
  }
}
