import { FbAuthResponse } from './../../interfaces';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/interfaces';
import { Observable, throwError, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error$:Subject<string>=new Subject<string>()
  constructor(private http:HttpClient) { }
  login(user:User):Observable<any>{
    user.returnSecureToken=true;
   return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apikey}`,user)
   .pipe(tap(this.setToken),catchError(this.handleError.bind(this)))
  }
  logOut(){
      this.setToken(null)
  }
  get Token(){
    const expDate= new Date(localStorage.getItem('fb-token-exp'));
   if(new Date > expDate){
     this.logOut()
     return null
   }
    return localStorage.getItem('fb-token');
  }
  isAuthentificated():boolean{
    return !!this.Token
  }
  private setToken(response:FbAuthResponse | null){
    if(response){
      const  expiresDate=new Date(new Date().getTime()+ + response.expiresIn*1000);
      localStorage.setItem('fb-token',response.idToken);
      localStorage.setItem('fb-token-exp',expiresDate.toString());
    }
    else{
      localStorage.clear();
    }

  }
  handleError(error:HttpErrorResponse){
     const {message}=error.error.error
     switch(message){
       case 'EMAIL_NOT_FOUND':
         this.error$.next('Email не знайдено')
       break;
       case 'INVALID_EMAIL':
        this.error$.next('Невірний email')
       break;
       case 'INVALID_PASSWORD':
        this.error$.next('Невірний пароль')
       break;
     }
     return throwError(error)
  }
}
