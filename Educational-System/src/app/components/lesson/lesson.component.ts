import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  isDark = true;

  constructor(public courseService: CourseService) { }

  ngOnInit() {

    this.courseService.lessontoShow$.subscribe( changed => {
      if ( changed !== null && changed !== undefined) {
        console.log(changed);
        document.querySelector('.content').innerHTML = changed;
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

}
