import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AgregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  textInput:FormControl;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.textInput = new FormControl('',Validators.required);
  }

  agregarTodo(){
    if(this.textInput.invalid){
      return;
    }
    const action = new AgregarTodoAction(this.textInput.value);
    this.store.dispatch(action);
    this.textInput.setValue('');

  }

}
