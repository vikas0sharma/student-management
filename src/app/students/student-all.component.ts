import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {
  students : Student[];
  showDetailsView(id : string ) :void  {
    this._router.navigate(['/students/'+id]);
  }
  constructor(private _studentService: StudentService, private _router: Router) { }

  ngOnInit() {
    this._studentService.getStudents().subscribe(students => {
    this.students = students;
  
  },
      error => console.log(error));
  }

}
