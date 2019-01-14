import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskStatePipe } from './task-state.pipe';
import { ColorStateDirective } from './color-state.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatIconRegistry, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatSidenavModule, MatSelectModule
} from '@angular/material';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';
import { ChartResultsComponent } from './components/chart-results/chart-results.component';
import {ChartsModule, WavesModule} from 'angular-bootstrap-md';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskStatePipe,
    ColorStateDirective,
    TodoListComponent,
    TaskCardComponent,
    TaskCreatorComponent,
    ChartResultsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    ChartsModule,
    WavesModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DataService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
