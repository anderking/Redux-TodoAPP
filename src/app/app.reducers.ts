import { Todo } from './todo/model/todo.model';
import { filtersValidate } from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState{
    todos:Todo[];
    filtros: filtersValidate;
}

export const appReducers:ActionReducerMap<AppState> = {
    todos:todoReducer,
    filtros:filterReducer
}