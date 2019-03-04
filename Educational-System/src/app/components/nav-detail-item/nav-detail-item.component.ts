import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-nav-detail-item',
  templateUrl: './nav-detail-item.component.html',
  styleUrls: ['./nav-detail-item.component.css']
})
export class NavDetailItemComponent implements OnInit {

  @Input() course;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }


  showLesson(i) {
    console.log(i);
    this.courseService.setLessonToShow(this.course.lessons[i]);
    console.log(this.courseService.lessonToShow);
  }

}
