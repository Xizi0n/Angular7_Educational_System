import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxEditorModule } from "ngx-editor";
import { AppRoutingModule } from "./app-routing.module";
import { MonacoEditorModule } from "ngx-monaco-editor";

// Components
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { HeaderComponent } from "./components/header/header.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { CourseComponent } from "./components/course/course.component";
import { AuthService } from "./services/auth.service";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ChartCardComponent } from "./components/chart-card/chart-card.component";
import { LessonComponent } from "./components/lesson/lesson.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NavItemComponent } from "./components/nav-item/nav-item.component";
import { NavDetailItemComponent } from "./components/nav-detail-item/nav-detail-item.component";
import { ExercisesComponent } from "./components/exercises/exercises/exercises.component";
import { ExerciseComponent } from "./components/exercises/exercise/exercise.component";
import { MonacoEditorComponent } from "./components/exercises/monaco-editor/monaco-editor.component";
import { ForumMainComponent } from "./components/forum/forum-main/forum-main.component";
import { ForumListItemComponent } from "./components/forum/forum-list-item/forum-list-item.component";
import { ForumListDetailsComponent } from "./components/forum/forum-list-details/forum-list-details.component";
import { FileComponent } from './file/file.component';
import { ForumReplyComponent } from './components/forum/forum-reply/forum-reply.component';
import { ForumRepliesComponent } from './components/forum/forum-replies/forum-replies.component';
import { ForumPostComponent } from './components/forum/forum-post/forum-post.component';
import { ForumListItemRowComponent } from './components/forum/forum-list-item-row/forum-list-item-row.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    CoursesComponent,
    CourseComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ChartCardComponent,
    LessonComponent,
    SidenavComponent,
    NavItemComponent,
    NavDetailItemComponent,
    ExercisesComponent,
    ExerciseComponent,
    MonacoEditorComponent,
    ForumMainComponent,
    ForumListItemComponent,
    ForumListDetailsComponent,
    FileComponent,
    ForumReplyComponent,
    ForumRepliesComponent,
    ForumPostComponent,
    ForumListItemRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEditorModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
