import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  studentName:String = "Kavi";
  studentMark:number = 490;
  joinDate:Date = new Date();
  message:String = "This is event binding";
  fontColor:String = 'blue';


displayMessage() {
  alert(this.message)
}
}
