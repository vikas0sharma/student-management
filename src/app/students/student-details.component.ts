import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Enrollment } from './enrollment';
import { Assignment } from './assignment';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  enrollmentHistory : Enrollment[];
  assignmentHistory : Assignment[];

  constructor(private _studentService: StudentService, private _router: Router, private _route: ActivatedRoute) { }

  goBack() :void  {
    this._router.navigate(['/students']);
  }
  
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.getEnrollmentHistory(id);
    this.getAssignmentHistory(id);
  }

  private getAssignmentHistory(id: number) {
    this._studentService.getAssignmentHistory(id).subscribe(assignmentHistory => {
      this.assignmentHistory = assignmentHistory;
    }, error => console.log(error));
  }

  private getEnrollmentHistory(id: number) {
    this._studentService.getEnrollmentHistory(id).subscribe(enrollmentHistory => {
      this.enrollmentHistory = enrollmentHistory;
    }, error => console.log(error));
  }
}
