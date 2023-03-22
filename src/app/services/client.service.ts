import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClientService {

  private anyUserConnectedSource = new BehaviorSubject("");
  public anyUserConnected = this.anyUserConnectedSource.asObservable();

  constructor() { }

  connection(user: string){
    this.anyUserConnectedSource.next(user);
    localStorage.setItem("test",user);
  }

  deconnection(){
    this.anyUserConnectedSource.next("");
  }
}
