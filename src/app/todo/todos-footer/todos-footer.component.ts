import { Component, OnInit } from '@angular/core';
import { filtersValidate, SetFilterAction } from 'src/app/filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { DeleteCompletadoTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css']
})
export class TodosFooterComponent implements OnInit {

  validateFilters:filtersValidate[]=['todos','completados','pendientes'];
  filterCurrent:filtersValidate;
  pendientes:number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.filterCurrent = state.filtros;
      this.contarPendientes(state.todos);
    });
  }

  changeFilter(newFilter: filtersValidate){
    const action = new SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  contarPendientes(todo:Todo[]){
    this.pendientes = todo.filter(todo=>!todo.completado).length;
  }

  clean(){
    const action = new DeleteCompletadoTodoAction();
    this.store.dispatch(action);
  }

}
