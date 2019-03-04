import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input() course;
  isOpen = false;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log('oppen toggled');
  }

}
