import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './__auth/auth.guard';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data:{roles: ['Admin']} },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'user', component: UserComponent , canActivate: [AuthGuard], data:{roles: ['User']}},
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
