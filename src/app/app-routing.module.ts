import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListTableComponent } from './task/task-list-table/task-list-table.component';
import { LoginComponent } from './user/login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'task-list', component: TaskListTableComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
