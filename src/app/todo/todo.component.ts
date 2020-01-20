import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public isToggleAll:boolean;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.isToggleAll = !this.isToggleAll;
    const action = new ToggleAllTodoAction(this.isToggleAll);
    this.store.dispatch(action);
  }

}
