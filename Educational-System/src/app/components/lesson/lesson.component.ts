import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  isDark = true;
  isEditing = false;
  currentLesson = '';
  @ViewChild('contentToShow') contentToShow: ElementRef;

  constructor(public courseService: CourseService) { }

  ngOnInit() {

    this.courseService.lessontoShow$.subscribe( changed => {
      if ( changed !== null && changed !== undefined) {
        console.log(changed);
        this.contentToShow.nativeElement.innerHTML = changed;
        this.currentLesson = changed;
        console.log('Currentleson: ' + this.currentLesson);
      }
    });
  }

  changeColor() {
    this.isDark = !this.isDark;
    if ( this.isDark) {
      document.getElementById('content').style.color = '#fafafa';
      document.getElementById('content').style.backgroundColor = '#212121';
    } else {
      document.getElementById('content').style.color = '#212121';
      document.getElementById('content').style.backgroundColor = '#fafafa';
    }
  }

  startEdit() {
    this.isEditing = true;
    console.log('isEditing: ' + this.isEditing);
  }

  cancelEditing() {
    this.isEditing = false;
    setTimeout(() => {
      this.showContent();
    }, 100);
  }

  showContent() {
    this.contentToShow.nativeElement.innerHTML = this.currentLesson;
  }

  updateLesson() {
    console.log(this.currentLesson);
    this.courseService.updateLesson(this.currentLesson).subscribe( result => {
      console.log(result);
      this.isEditing = false;
      this.courseService.dbOperation.next(true);
      setTimeout(() => {
        this.showContent();
      }, 100);
    },
    error => {
      console.log(error);
    });
  }

}
