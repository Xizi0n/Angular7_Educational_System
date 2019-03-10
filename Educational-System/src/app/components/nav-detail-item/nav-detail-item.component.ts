import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-detail-item',
  templateUrl: './nav-detail-item.component.html',
  styleUrls: ['./nav-detail-item.component.css']
})
export class NavDetailItemComponent implements OnInit {

  @Input() course;
  inputEnabled = false;
  addTitle = '';

  constructor(private courseService: CourseService, public auth: AuthService) { }

  ngOnInit() {
  }


  showLesson(i) {
    console.log(i);
    this.courseService.setLessonToShow(this.course.lessons[i].lesson);
    console.log(this.course);
  }

  collapse() {
    if ( window.innerWidth < 1100) {
      document.querySelectorAll('.navDetailItem').forEach ( element => {
        element.classList.add('hidden');
      });
      document.querySelectorAll('.navItem').forEach ( element => {
        element.classList.remove('open');
      });
    }
  }

  addLesson() {
    if (this.addTitle !== null && this.addTitle !== undefined && this.addTitle !== '') {
      console.log('Adding lesson');
      const where = {
        _id: String(this.course.id)
      };
      console.log(where);
      this.courseService.updateCourse( where , {
        title: this.addTitle,
        lesson: '',
        exercises: []
      });
    } else {
      console.log('HIBA!');
    }
  }

  addInput() {
    this.inputEnabled = true;
  }

}
