import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { ConnectedUser } from '../models/connectedUser';
import { ClientService } from './client.service';


@Injectable()
export class LoginService {
    
    connectedData?: ConnectedUser;
    
    constructor(
		private readonly _httpClient: HttpClient,
        private readonly _clientService: ClientService
	) {}

    login(cred: {username:string, password:string}, ){
        return this._httpClient.post<ConnectedUser>("http://localhost:8080/api/auth/login", cred).pipe(
            tap(resp => {
                this.connectedData = resp;
                localStorage.setItem("token",this.connectedData?.token??"tt")
                localStorage.setItem("username",this.connectedData?.username??"")
                localStorage.setItem("role",this.connectedData?.roles[0]??"")
                this._clientService.connection(localStorage.getItem("role")??"")
            })

        )

    }
}

