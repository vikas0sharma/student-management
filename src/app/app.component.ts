import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './login/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  isLoggedIn: boolean;
  constructor(private _authService: AuthenticationService, private _router: Router) {

  }
  ngOnInit(): void {
    this._authService.isLoggedInStatus.subscribe(status => this.isLoggedIn = status);
  }

  logOut(): void {
    this._authService.changeLoggInStatus(false);
    this._router.navigate(['/login']);
  }
}
