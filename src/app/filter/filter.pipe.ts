import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filtersValidate } from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todo:Todo[], filtro:filtersValidate): Todo[] {
    switch(filtro){
      case 'completados':
        return todo.filter(todo=>todo.completado);
      case 'pendientes':
        return todo.filter(todo=>!todo.completado);
      default:
        return todo;
    }
  }

}
