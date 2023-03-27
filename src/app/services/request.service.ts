import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

export type Post = {
	id: number;
	name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

	constructor(
		private readonly _httpClient: HttpClient,
	) { }

  	getAllMaterial() {
	return this._httpClient.get<Post[]>('http://localhost:8080/api/material')
		.pipe(
			// Modifier le résultat de l'observable précédent
			map((posts: Post[]) => {
				const newPost = posts.map((post: Post) => {
					return { id: post.id,name: post.name}
				});
				return newPost;
			}),
			// Gestion de l'erreur
			catchError((error) => {
				return throwError(() => new Error("ERREUR"))
			})
		);
	}

	create(form: any): Observable<never> {
		return this._httpClient.post<never>("http://localhost:8080/api/request/new",form/** ,{
			headers:{'Authorisation':localStorage.getItem("token")!}
		}*/).pipe(
		  tap( (data) => console.log("ok"))
		);
	}

	getRequests(status:string) {
		return this._httpClient.get<any[]>('http://localhost:8080/api/request/future',{
			params: {status}
		}).pipe(
			// Gestion de l'erreur
			catchError((error) => {
				return throwError(() => new Error("ERREUR"))
			})
		);
	}

	getOne(id:number) {
		return this._httpClient.get<any[]>('http://localhost:8080/api/request/'+id).pipe(
			// Gestion de l'erreur
			catchError((error) => {
				return throwError(() => new Error("ERREUR"))
			})
		);
	}
}
