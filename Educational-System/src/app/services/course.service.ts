import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  courses = [];
  lessonToShow;
  actualCourse;
  actualIndex;

  course$ = new BehaviorSubject(this.courses);
  dbOperation = new BehaviorSubject(false);
  lessontoShow$ = new BehaviorSubject(this.lessonToShow);
  actualCourse$ = new BehaviorSubject(this.actualCourse);

  // LessonToShow$ = this.lessonToShow.asObservable();

  constructor(private http: HttpClient) {
    this.dbOperation.subscribe(onGoingOperation => {
      if (onGoingOperation) {
        this.getCourses();
      }
    });
  }

  setLessonToShow(lesson: any, course: any, index: any) {
    this.lessonToShow = lesson;
    console.log("LessonToShow:", this.lessonToShow);
    this.lessontoShow$.next(lesson);
    this.actualCourse = course;
    this.actualCourse$.next(course);
    this.actualIndex = index;
  }

  createCourse(course) {
    return this.http.post(
      environment.BaseUrl + "/course/add",
      {
        name: course.name,
        icon: course.icon
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  getCourses() {
    /* const course$ = this.http.get(environment.BaseUrl + "/course/get-all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    course$.subscribe(courses => {
      console.log("GETCOURSES:", courses);
      this.course$.next(courses);
    });
    return course$; */
    this.http
      .get(environment.BaseUrl + "/course/get-all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .subscribe((courses: any) => {
        console.log(
          "--------------------------getCourses -------------------------"
        );
        console.log(courses);
        this.course$.next(courses);
      });
  }

  getAllCourses() {
    return this.http.get(environment.BaseUrl + "/course/get-all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }

  getCourse(id) {
    return this.http.get(environment.BaseUrl + `/course/get/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }

  updateLesson(lesson: any) {
    return this.http.post(
      environment.BaseUrl + "/lesson/update",
      {
        lessonId: lesson._id,
        updatedLesson: lesson
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  deleteCourse(id: any) {
    return this.http.post(
      environment.BaseUrl + "/course/delete",
      {
        courseId: id
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  deleteLesson(courseId, lessonId) {
    return this.http.post(
      environment.BaseUrl + "/lesson/remove",
      {
        courseId: courseId,
        lessonId: lessonId
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  addLesson(courseId, title) {
    return this.http.post(
      environment.BaseUrl + "/lesson/add",
      {
        courseId: courseId,
        title: title,
        content: "TODO"
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  addExercise(lessonId, exercise) {
    return this.http.post(
      environment.BaseUrl + "/lesson/add-exercise",
      {
        lessonId: lessonId,
        declaration: exercise.declaration,
        explanation: exercise.explanation,
        language: exercise.language,
        score: exercise.score
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  updateExercise(lessonId, updatedValues, index) {
    console.log(updatedValues);
    return this.http.post(
      environment.BaseUrl + "/lesson/update-exercise",
      {
        lessonId,
        index,
        updatedExercise: updatedValues
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }
  deleteExercise(lessonId, exerciseId) {
    return this.http.post(
      environment.BaseUrl + "/lesson/delete-exercise",
      {
        lessonId,
        exerciseId
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  uploadPdf(fileToUpload, lesson) {
    const formData = new FormData();
    formData.append("pdf", fileToUpload.file);
    formData.append("name", fileToUpload.name);
    formData.append("lessonId", lesson._id);
    return this.http.post(environment.UploadPdfUrl, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }
}
