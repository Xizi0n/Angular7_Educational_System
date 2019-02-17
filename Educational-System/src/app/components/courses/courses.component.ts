import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  mockCourse = [{title: 'Programozás Alapjai', icon: 'fas fa-code'},
                {title: 'Programozás I.', icon: 'fas fa-coffee'},
                {title: 'Alkalmazásfejlesztés.', icon: 'fas fa-desktop'},
                {title: 'Adatbázisok', icon: 'fas fa-database'},
                {title: 'Mobil alkalmazásfejlesztés', icon: 'fas fa-mobile-alt'},
                {title: 'Számítógépes grafika', icon: 'fas fa-image'},
                {title: 'Operációs rendszerek', icon: 'fas fa-terminal'},
                {title: 'Rendszerfejlesztés I.', icon: 'fas fa-code-branch'}
];

  constructor() { }

  ngOnInit() {
  }

}
