import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { ConnectedUser } from '../models/connectedUser';


@Injectable()
export class LoginService {
    
    connectedData?: ConnectedUser;
    
    constructor(
		private readonly _httpClient: HttpClient,
	) {}

    login(cred: {username:string, password:string}){
        return this._httpClient.post<ConnectedUser>("http://localhost:8080/api/auth/login", cred).pipe(
            tap(resp => {
                this.connectedData = resp;
                localStorage.setItem("token",this.connectedData?.token??"")
            })

        )

    }
}

