import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { TaskStatePipe } from './task-state.pipe';
import { ColorStateDirective } from './color-state.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconRegistry, MatIconModule, MatInputModule , MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskStatePipe,
    ColorStateDirective,
    TodoListComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DataService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
