import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {ChartResultsComponent} from './components/chart-results/chart-results.component';

const routes: Routes = [
  { path: 'todo', component: TodoListComponent  },
  { path: 'chart', component: ChartResultsComponent },
  { path: '', component: TodoListComponent  },
  { path: '**', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
