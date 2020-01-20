import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLEALL_TODO = '[TODO] ToggleAll todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETECOMPLETADO_TODO = '[TODO] Deletecompletado todo';


export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;
    constructor(public texto:string){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    constructor(public id:number){}
}

export class EditTodoAction implements Action{
    readonly type = EDIT_TODO;
    constructor(public id:number,public texto:string){};
}

export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO;
    constructor(public id:number){};
}

export class DeleteCompletadoTodoAction implements Action{
    readonly type = DELETECOMPLETADO_TODO;
    constructor(){};
}

export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLEALL_TODO;
    constructor(public completado:boolean){};
}

export type actions =
                        AgregarTodoAction |
                        ToggleTodoAction |
                        EditTodoAction |
                        DeleteTodoAction |
                        ToggleAllTodoAction |
                        DeleteCompletadoTodoAction;
                    
