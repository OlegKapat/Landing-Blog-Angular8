import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutInterseptorService implements HttpInterceptor {
  intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    if (this.auth.isAuthentificated()){
      req=req.clone({
        setParams:{
          auth:this.auth.Token
        }
      })
    }
    return next.handle(req).pipe(catchError((error:HttpErrorResponse)=>{
        return throwError(error)
    }))
  }

  constructor(private auth:AuthService, private router:Router) { }
}
