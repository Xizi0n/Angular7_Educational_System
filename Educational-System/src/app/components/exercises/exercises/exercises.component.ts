import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises;

  constructor(public courseService: CourseService) {
    this.courseService.actualCourse$.subscribe( actualCourse => {
      this.exercises = actualCourse.lessons[this.courseService.actualIndex].exercises;
    });
   }

  ngOnInit() {
  }

}
