import { Action } from '@ngrx/store';

export type filtersValidate = 'todos' | 'completados' | 'pendientes'

export const SET_FILTER = '[FILTER] Set filer';

export class SetFilterAction implements Action{
    readonly type = SET_FILTER;
    constructor(public filtro:filtersValidate){}
}


export type actions =
                        SetFilterAction;
                    
