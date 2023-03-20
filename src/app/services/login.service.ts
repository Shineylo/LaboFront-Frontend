import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';

export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
}

@Injectable()
export class LoginService {
    
    connectedData: any;
    
    constructor(
		private readonly _httpClient: HttpClient,
	) {}

    login(cred: {username:string, password:string}){
        return this._httpClient.post("http://localhost:8080/api/auth/login", cred).pipe(
            tap(resp => this.connectedData = resp)
        )
    }
}

