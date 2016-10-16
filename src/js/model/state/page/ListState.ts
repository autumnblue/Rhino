import { ViewType } from './ViewType';

export interface ListState<T> {
    list?: T[],
    view: ViewType
}