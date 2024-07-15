import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { user } from './user/user.module';
import { task } from './task/task.module';
import { TaskEditDialogComponent } from './task/task-edit-dialog/task-edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';
import { about } from './about/about.module';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    task,
    user,
    about,
    TaskEditDialogComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
