import { Component, OnInit, Input } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.css"]
})
export class ExercisesComponent implements OnInit {
  @Input() lesson;
  exercises;
  isAdding = false;
  declaration;
  explanation;
  score;
  language;

  constructor(public courseService: CourseService, public auth: AuthService) {
    this.courseService.lessontoShow$.subscribe(lesson => {
      console.log("[LESSONTOSHOW]:", lesson);
      this.exercises = lesson.exercises;
    });
  }

  ngOnInit() {}

  addExercise() {
    console.log("I should add an exercise");
    this.isAdding = true;
  }

  dismiss() {
    console.log("dismiss");
    this.isAdding = false;
  }

  createExercise() {
    console.log(this.declaration, this.explanation, this.language, this.score);
    const exercise = {
      declaration: this.declaration,
      explanation: this.explanation,
      language: this.language,
      score: this.score
    };
    console.log(this.lesson._id);
    this.courseService
      .addExercise(this.lesson._id, exercise)
      .subscribe(result => {
        console.log(result);
        this.declaration = "";
        this.explanation = "";
        this.score = null;
        this.language = "";
        this.courseService.dbOperation.next(true);
        this.dismiss();
      });
  }
}
