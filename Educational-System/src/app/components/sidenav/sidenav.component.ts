import { Component, OnInit, Input, Output } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() courses;
  hasArrived = false;

  constructor(private courseService: CourseService) {
    courseService.getCourses().subscribe( courses => {
      this.courses = courses;
      this.hasArrived = true;
      console.log('SIDENAV COURSES' + JSON.stringify(this.courses));
    });
  }

  ngOnInit() {
  }

}
