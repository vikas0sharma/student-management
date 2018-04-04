import { Injectable } from '@angular/core';
import { HttpClientModule, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Enrollment } from './enrollment';
import { Assignment } from './assignment';

@Injectable()
export class StudentService {
  private _studentUrl = 'http://interviewapi20170221095727.azurewebsites.net/api/Student/All';
  private _enrolmentUrl = 'http://interviewapi20170221095727.azurewebsites.net/api/Student/EnrollmentHistory';
  private _assignmentUrl = 'http://interviewapi20170221095727.azurewebsites.net/api/Student/AssignmentHistory';

  constructor(private _httpClient: HttpClient) { }

  getStudents() {
    return this._httpClient.get<Student[]>(this._studentUrl, {
    })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

  getEnrollmentHistory(id: number) {
    return this._httpClient.get<Enrollment[]>(this._enrolmentUrl + '?studentId=' + id, {
    })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getAssignmentHistory(id: number) {
    return this._httpClient.get<Assignment[]>(this._assignmentUrl + '?studentId=' + id, {
    })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
}