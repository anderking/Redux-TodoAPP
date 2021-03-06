import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { filtersValidate } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos:Todo[] = [];
  filtro:filtersValidate;

  constructor(private store: Store<AppState>) { }
  

  ngOnInit() {
    this.store.subscribe(state=>{
      this.todos = state.todos;
      this.filtro = state.filtros;
    });
  }

}
