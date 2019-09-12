import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  courses;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = [];

    /* this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
        console.log("COURSES" + courses);
      },
      error => {
        console.log("error" + error);
      }
    ); */
    this.courseService.course$.subscribe(courses => {
      this.courses = courses;
    });
    this.courseService.getCourses();
  }
}
