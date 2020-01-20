import { Todo } from "./model/todo.model";
import { actions, AGREGAR_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLEALL_TODO, DELETECOMPLETADO_TODO } from './todo.actions';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Vencer a IronMan');
todo1.completado = true;
const stateInicial:Todo[]=[todo1,todo2];

export function todoReducer(state=stateInicial,action:actions):Todo[]{
    switch(action.type){
        case AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state,todo];
        case TOGGLE_TODO:
            return state.map(todoEdit=>{
                if(todoEdit.id===action.id){
                    return {
                        ...todoEdit,
                        completado:!todoEdit.completado
                    }
                }else{
                    return todoEdit
                }
            });
        case TOGGLEALL_TODO:
            return state.map(todoEdit=>{
                return {
                    ...todoEdit,
                    completado:action.completado
                }
            });
        case EDIT_TODO:
            return state.map(todoEdit=>{
                if(todoEdit.id===action.id){
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                }else{
                    return todoEdit
                }
            });
        case DELETE_TODO:
            return state.filter(todoEdit=>todoEdit.id!=action.id);
        case DELETECOMPLETADO_TODO:
            return state.filter(todoEdit=>!todoEdit.completado)
        default:
            return state;
    }
}
