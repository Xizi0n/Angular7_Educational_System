import { Component, OnInit, Input } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-nav-detail-item",
  templateUrl: "./nav-detail-item.component.html",
  styleUrls: ["./nav-detail-item.component.css"]
})
export class NavDetailItemComponent implements OnInit {
  @Input() course;
  inputEnabled = false;
  addTitle = "";
  lessons;

  constructor(private courseService: CourseService, public auth: AuthService) {}

  ngOnInit() {
    this.lessons = this.course.lessons;
  }

  showLesson(i) {
    console.log("/////////////SHOWLWSSON//////////");
    console.log(this.lessons[i]);
    this.courseService.setLessonToShow(this.course.lessons[i], this.course, i);
  }

  collapse() {
    if (window.innerWidth < 1100) {
      document.querySelectorAll(".navDetailItem").forEach(element => {
        element.classList.add("hidden");
      });
      document.querySelectorAll(".navItem").forEach(element => {
        element.classList.remove("open");
      });
    }
  }

  addLesson() {
    if (this.addTitle) {
      this.courseService.addLesson(this.course._id, this.addTitle).subscribe(
        sucess => {
          console.log(sucess);
          this.courseService.dbOperation.next(true);
          this.courseService
            .getCourse(this.course._id)
            .subscribe((course: any) => {
              this.lessons = course.lessons;
              console.log(this.lessons);
              this.inputEnabled = false;
            });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("HIBA!");
    }
  }

  addInput() {
    this.inputEnabled = true;
  }

  deleteLesson(i) {
    const courseId = this.course._id;
    const lessonId = this.course.lessons[i]._id;
    if (
      confirm(
        "Biztos törlöd ezt a leckét: " + this.course.lessons[i].title + "?"
      )
    ) {
      this.courseService.deleteLesson(courseId, lessonId).subscribe(
        sucess => {
          console.log(sucess);
          this.courseService.dbOperation.next(true);
          this.courseService
            .getCourse(this.course._id)
            .subscribe((course: any) => {
              this.lessons = course.lessons;
            });
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
