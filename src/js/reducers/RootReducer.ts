import { Reducer } from 'redux';
import { ListState } from '../model/state/page/ListState';
import { Action } from '../actions/Action';
import { ActionType } from '../actions/ActionType';
import { PagedDto } from '../model/dto/PagedDto';
import { Dto } from '../model/dto/Dto';
import { copy } from '../common/Util';
import { ViewType } from '../model/state/page/ViewType';

export const reducer = <T extends ListState<any>>(
        loadFn: (dtos: PagedDto<Dto>, state: T) => T, 
        defaultStateFn: () => T
    ): Reducer<T> => {
        return (state: T = defaultStateFn(), action: Action): T => {
            switch(action.type) {
                case ActionType.CRUD_INIT:
                    return loadFn(action.payload, 
                        copy<T>(state));

                case ActionType.CRUD_TOGGLE_VIEW:
                    state.view = state.view == ViewType.TABLE
                        ? ViewType.GRID
                        : ViewType.TABLE
                    return copy<T>(state);

                default: return state;
            }
        }
}