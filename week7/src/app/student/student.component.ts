import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  studenName = 'vasiliy Pupkin';
  studentId:number = 123;
  studentStatus = "pewsent";

  getStudentId(){
    return this.studentId;
  }

  constructor() { 
    this.studentStatus = Math.random()>0.5 ? 'present': 'absent';
  }

  ngOnInit() {
  }

}
