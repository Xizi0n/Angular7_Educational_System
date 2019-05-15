import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AuthguardService } from './services/authguard.service';
import { ForumMainComponent } from './components/forum/forum-main/forum-main.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'kurzusok', component: CoursesComponent, canActivate: [AuthguardService]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthguardService]},
  {path: 'lessons', component: LessonComponent, canActivate: [AuthguardService] },
  {path: 'forum', component: ForumMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
