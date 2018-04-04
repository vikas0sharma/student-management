import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpEvent, HttpResponse, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor() { }
  public getToken(): string {
    return localStorage.getItem('token');
  }

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedInStatus = this.isLoggedIn.asObservable();

  changeLoggInStatus(status: boolean) {
    this.isLoggedIn.next(status);
    localStorage.clear();
  }

  authenticate(username: string, password: string): Observable<HttpResponseBase> {
    
    // Mocking the authentication service as we don't have actual service available.

    if (username && password && username == 'authentica' && password == '@uth3nt1c@') {
      
      let body = {
        id: 'authentica',
        username: 'authentica',
        token: 'YXV0aGVudGljYTpAdXRoM250MWNA',
      };
      this.isLoggedIn.next(true);
      return Observable.of(new HttpResponse({ status: 200, body: body }));
    }
    return Observable.of(new HttpErrorResponse({ status: 401, statusText: "not matched" }));
  }

}
