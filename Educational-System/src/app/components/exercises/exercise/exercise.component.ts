import { Component, OnInit, Input } from "@angular/core";
import { CompileService } from "src/app/services/compile.service";
import { AuthService } from "src/app/services/auth.service";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-exercise",
  templateUrl: "./exercise.component.html",
  styleUrls: ["./exercise.component.css"]
})
export class ExerciseComponent implements OnInit {
  @Input() exercise;
  @Input() index;
  @Input() lessonId;
  compiled = false;
  shouldBeVisible = false;
  isEditing = false;
  updatedValues = {};

  constructor(private courseService: CourseService, public auth: AuthService) {}

  ngOnInit() {
    console.log("EXERCISE:", this.lessonId);
    console.log("EXERCISE:", this.index);
  }

  toggleShow() {
    this.shouldBeVisible = !this.shouldBeVisible;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.updatedValues = { ...this.exercise };
    }
  }

  updateExercise() {
    this.courseService
      .updateExercise(this.lessonId, this.updatedValues, this.index)
      .subscribe(result => {
        console.log(result);
        this.toggleEdit();
      });
  }

  deleteExercise() {
    const decision = confirm("Tényleg törölni szeretnéd a feladatot?");
    if (decision) {
      this.courseService
        .deleteExercise(this.lessonId, this.exercise._id)
        .subscribe(result => {
          console.log(result);
          this.courseService.dbOperation.next(true);
        });
    }
  }
}
