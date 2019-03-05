import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoopBackConfig } from '../shared/sdk';
import { CoursesApi } from '../shared/sdk';
import { environment } from '../../environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  courses = [];
  lessonToShow;

  lessontoShow$ = new BehaviorSubject(this.lessonToShow);

  // LessonToShow$ = this.lessonToShow.asObservable();
  mock = {
    name: 'A programozás alapjai',
    icon: 'fas fa-code',
    lessons: [
      {
        title: 'Az első programunk',
        // tslint:disable-next-line:max-line-length
        lesson: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu feugiat augue. Etiam vitae massa mattis, pulvinar felis at, sodales quam. Etiam luctus, quam sit amet volutpat fermentum, orci sapien maximus felis, nec viverra felis mauris at enim. Maecenas quis cursus odio. Fusce ipsum neque, ornare a bibendum ac, fringilla nec nulla. Aliquam pellentesque pretium urna vel pharetra. Cras a interdum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        exercises: [
          {
            // tslint:disable-next-line:max-line-length
            declaration: 'Bacon ipsum dolor amet kevin tri-tip ham ribeye. Meatball turkey turducken, drumstick tail shoulder capicola alcatra ribeye. Corned beef landjaeger chicken drumstick, swine sirloin jerky pastrami t-bone jowl ham hock tri-tip. Hamburger corned beef chicken, ball tip spare ribs pancetta salami flank. Sausage ground round alcatra, burgdoggen t-bone turkey ham kevin kielbasa.',
            solution: '2',
            explanation: 'Azért mert csak.'
          }
        ]
      }
    ]
  };

  constructor(private http: HttpClient, private coursesApi: CoursesApi) {
    LoopBackConfig.setBaseURL(environment.loopBackBaseUrl);
    LoopBackConfig.setApiVersion(environment.loopBackApi);
  }

  setLessonToShow(lesson: any) {
    this.lessonToShow = lesson;
    this.lessontoShow$.next(this.lessonToShow);
  }



  createCourse(course) {
     this.coursesApi.create(course).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCourses() {
    const course$ = this.coursesApi.find();
    course$.subscribe( courses => {
      this.courses = courses;
  });
    return course$;
  }

  getCourse(filter) {
    const course$ = this.coursesApi.findOne(filter);
    return course$;
  }

  /* updateCourse(filter, change) {
    const updatedCourse = this.coursesApi.updateAll(filter, change);
    return updatedCourse;
  } */


}