import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {ChartResultsComponent} from './components/chart-results/chart-results.component';

const routes: Routes = [
  { path: '', component: TodoListComponent  },
  { path: 'todo', component: TodoListComponent  },
  { path: 'chart', component: ChartResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
