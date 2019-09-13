import { Component, OnInit, Input, Output } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  @Output() courses;

  addCourse = false;
  addTitle = "";
  addIcon = "";

  constructor(private courseService: CourseService, public auth: AuthService) {
    /* this.courseService.course$.subscribe(courses => {
      console.log("Courses BehaviourSubject:", courses);
      this.courses = courses;
      this.hasArrived = true;

      console.log("this.courses:", this.courses);
    });
    courseService.getCourses(); */
    this.courseService.dbOperation.subscribe(operation => {
      console.log("[DB operation happedned]: refreshing courses ");
      this.courseService.getAllCourses().subscribe(courses => {
        this.courses = courses;
      });
    });
  }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  createCourse() {
    if (this.addIcon) {
      console.log("Inserting with custom icon");
      this.courseService
        .createCourse({
          name: this.addTitle,
          icon: this.addIcon
        })
        .subscribe(
          response => {
            console.log(response);
            //window.location.reload();
            this.courseService.getAllCourses().subscribe(courses => {
              this.courses = courses;
              //this.hasArrived = true;
              // console.log('SIDENAV COURSES' + JSON.stringify(this.courses));
            });
          },
          error => {
            console.log(error);
          }
        );
    } else {
      console.log("inserting with default icon");
      this.courseService
        .createCourse({
          name: this.addTitle,
          icon: "fas fa-book-open"
        })
        .subscribe(
          response => {
            console.log(response);
            this.courseService.getAllCourses().subscribe(courses => {
              this.courses = courses;
              this.hideDropDown();
            });
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
    this.addIcon = "";
    this.addTitle = "";
    this.addCourse = false;
  }
}
