import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListTableComponent } from './task/task-list-table/task-list-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'new-home', pathMatch: 'full' }, // Cambiar 'new-home' por la ruta deseada
  { path: 'new-home', component: TaskListTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
