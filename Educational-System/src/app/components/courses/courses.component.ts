import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;

  /* #region MOCK*/
  private mocks = [
    {
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
    },
    {
      name: 'Programozás I',
      icon: 'fas fa-coffee',
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
    },

    {
      name: 'Alkalmazásfejlesztés',
      icon: 'fas fa-desktop',
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
    },

    {
      name: 'Adatbázisok',
      icon: 'fas fa-database',
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
    },

    {
      name: 'Mobil alkalmazásfejlesztés',
      icon: 'fas fa-mobile-alt',
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
    },

    {
      name: 'Számítógépes grafika',
      icon: 'fas fa-image',
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
    },

    {
      name: 'Operációs rendszerek',
      icon: 'fas fa-terminal',
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
    },

    {
      name: 'Rendszerfejlesztés I.',
      icon: 'fas fa-code-branch',
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
    }
  ];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    // Init
    /* this.mocks.forEach( element => {
      this.courseService.createCourse(element);
    }); */
    this.courses = [];

    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
        console.log('COURSES' + courses);
      },
      error => {
        console.log('error' + error);
      }
    );

  }

}
