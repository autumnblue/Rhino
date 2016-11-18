import { ViewType } from './ViewType';
import CrudState from '../CrudState'

export class ListState<T extends CrudState> {
    constructor(context?) {
        this.context = context;
    }

    context?;
    list?: T[] = new Array<T>();
    view = ViewType.GRID;
}