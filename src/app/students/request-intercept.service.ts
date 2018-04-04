import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }
    from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { StudentService } from "./student.service";
import { AuthenticationService } from '../login/authentication.service';




@Injectable()
export class RequestInterceptorService implements HttpInterceptor {


    constructor(private authService: AuthenticationService) { }

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: 'Basic ' + token } })
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith('/api/authenticate'))
            return next.handle(req);

            console.log(localStorage.getItem('token'));
        return next.handle(this.addToken(req, localStorage.getItem('token')))
            .catch(error => {
                if (error instanceof HttpErrorResponse) {

                } else {
                    return Observable.throw(error);
                }
            });
    }
}