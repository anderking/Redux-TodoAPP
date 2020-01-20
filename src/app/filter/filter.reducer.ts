import { actions, filtersValidate, SET_FILTER} from './filter.actions';

const stateInicial:filtersValidate = 'todos';


export function filterReducer(state=stateInicial,action:actions):filtersValidate{
    switch(action.type){
        case SET_FILTER:
            return action.filtro;
        default:
            return state;
    }
}
