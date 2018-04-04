import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { FormsModule } from '@angular/forms';
import { AuthenticationGuard } from './authentication.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path:'login', component: LoginComponent }
    ])
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService, AuthenticationGuard]
})
export class LoginModule { }
