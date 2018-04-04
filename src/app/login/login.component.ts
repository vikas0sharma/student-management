import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  isLoggedIn: boolean;

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
  }

  authenticate(): void {
    this.isLoggedIn = this.login();
  }

  login(): boolean {
    this._authService.authenticate(this.userName, this.password).subscribe(response => {
      if (response instanceof HttpResponse) {
        if (response.status == 200 && response.body) {
          localStorage.setItem('token', response.body.token);
          this._router.navigate(['/students']);
        }
      }
      if (response instanceof HttpErrorResponse) {
        localStorage.clear();
        console.log(response)
        if (response.status === 401) {
          localStorage.clear();
        }
        return false;
      }
    }, error => {
      if (error instanceof HttpErrorResponse) {
        localStorage.clear();
        console.log(error)
        return false;
      }
    });
    return true;
  }
}
