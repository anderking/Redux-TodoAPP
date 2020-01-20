import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, FormControlName, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input() todo:Todo;
  @ViewChild('txtInputHidden',{static:false}) txtInputHidden:ElementRef;
  chkField:FormControl;
  txtInput:FormControl;
  editando:boolean;


  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto,Validators.required);
    this.chkField.valueChanges.subscribe(()=>{
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  update(){
    this.editando=true;
    setTimeout(()=>{
      this.txtInputHidden.nativeElement.select();
    },1)
  }

  endUpdate(){
    this.editando=false;
    const action = new EditTodoAction(this.todo.id,this.txtInput.value);
    this.store.dispatch(action);
  }

  delete(){
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
