import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAllComponent } from './student-all.component';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './request-intercept.service';
import { StudentDetailsComponent } from './student-details.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../login/authentication.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,    
    RouterModule.forChild([
      { path:'students', component: StudentAllComponent, canActivate: [AuthenticationGuard] },
      { path:'students/:id', component: StudentDetailsComponent },
    ]),
    SharedModule,
  ],
  declarations: [StudentAllComponent, StudentDetailsComponent],
  providers: [
    StudentService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ]
})
export class StudentModule { }
