import { Component, OnInit, Input } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.css"]
})
export class NavItemComponent implements OnInit {
  @Input() course;
  isOpen = false;

  constructor(private courseService: CourseService, public auth: AuthService) {}

  ngOnInit() {}

  toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log("oppen toggled");
  }

  close() {
    if (window.innerWidth < 1100) {
      this.isOpen = false;
    }
  }

  deleteCourse(id) {
    console.log(id);
    if (
      confirm("Biztos törölni akarod ezt a kurzust: " + this.course.name + "?")
    ) {
      this.courseService.deleteCourse(id).subscribe(
        success => {
          this.courseService.dbOperation.next(true);
          console.log("Succesfully deleted course with id : " + id);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
