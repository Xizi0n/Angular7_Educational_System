import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import * as jsPDF from "jspdf";
import { AuthService } from "src/app/services/auth.service";
import { environment } from "../../../environments/environment";

interface fileToUpload {
  file: any;
  name: any;
}
@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"]
})
export class LessonComponent implements OnInit, OnDestroy {
  isDark = true;
  isEditing = false;
  currentLesson;
  actualCourse;
  hasLessonToShow = false;
  addFile = false;
  fileToUpload: fileToUpload = {
    file: "",
    name: ""
  };
  baseUrl = environment.BasePdfUrl;
  selectedfile;
  @ViewChild("contentToShow") contentToShow: ElementRef;

  constructor(public courseService: CourseService, public auth: AuthService) {}

  ngOnInit() {
    this.courseService.lessontoShow$.subscribe(changed => {
      if (changed !== null && changed !== undefined) {
        this.hasLessonToShow = true;
        console.log("Changed:", changed);
        this.contentToShow.nativeElement.innerHTML = changed.content;
        this.currentLesson = changed;
      } else {
        this.hasLessonToShow = false;
      }
    });
    this.courseService.actualCourse$.subscribe(actualCourse => {
      console.log(actualCourse);
      this.actualCourse = actualCourse;
    });
  }

  fileChanged(e) {
    this.fileToUpload.file = e.target.files[0];
    this.selectedfile = this.fileToUpload.file.name;
    console.log(this.fileToUpload.file.name);
  }

  uploadPdf() {
    console.log(this.fileToUpload);
    this.courseService
      .uploadPdf(this.fileToUpload, this.currentLesson)
      .subscribe(result => {
        console.log(result);
      });
  }

  toggleUpload() {
    this.addFile = !this.addFile;
  }

  changeColor() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      document.getElementById("content").style.color = "#fafafa";
      document.getElementById("content").style.backgroundColor = "#212121";
    } else {
      document.getElementById("content").style.color = "#212121";
      document.getElementById("content").style.backgroundColor = "#fafafa";
    }
  }

  startEdit() {
    this.isEditing = true;
    console.log("isEditing: " + this.isEditing);
  }

  cancelEditing() {
    this.isEditing = false;
    setTimeout(() => {
      this.showContent();
    }, 100);
  }

  showContent() {
    this.contentToShow.nativeElement.innerHTML = this.currentLesson.content;
  }

  updateLesson() {
    console.log("//////////// LESSON UPDATELESSON //////////////////");
    console.log(this.currentLesson);
    console.log(this.actualCourse);
    this.courseService.updateLesson(this.currentLesson).subscribe(
      result => {
        console.log(result);
        this.isEditing = false;
        this.courseService.dbOperation.next(true);
        setTimeout(() => {
          this.showContent();
        }, 100);
      },
      error => {
        console.log(error);
      }
    );
  }

  savePdf() {
    const pdf = new jsPDF("p", "mm", "a4");
    console.log(document.querySelector("#toPdf"));
    pdf.addHTML(document.getElementById("toPdf"), () => {
      pdf.save("download.pdf");
    });
  }

  ngOnDestroy() {
    this.courseService.lessontoShow$.next(null);
  }
}
