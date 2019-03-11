import { Component, OnInit, Input, Output } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() courses;
  hasArrived = false;

  addCourse = false;
  addTitle = '';
  addIcon = '';

  constructor(private courseService: CourseService, public auth: AuthService) {
    courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.hasArrived = true;
      // console.log('SIDENAV COURSES' + JSON.stringify(this.courses));
    });

    this.courseService.course$.subscribe(
      courses => {
        console.log('Courses BehaviourSubject:');
        this.courses = courses;
      });
  }

  ngOnInit() {
  }

  createCourse() {
    if (this.addIcon !== '' && this.addIcon !== null && this.addIcon !== undefined) {
      console.log('Inserting with custom icon');
      this.courseService.createCourse(
        {
          name: this.addTitle,
          icon: this.addIcon,

        }
      ).subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('inserting with default icon');
      this.courseService.createCourse(
        {
          name: this.addTitle,

        }
      ).subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  showDropDown() {
    this.addCourse = true;
  }

  hideDropDown() {
    this.addIcon = '';
    this.addTitle = '';
    this.addCourse = false;
  }

}
