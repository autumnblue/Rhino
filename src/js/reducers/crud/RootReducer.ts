import { Reducer } from 'redux';
import { ListState } from '../../model/state/page/ListState';
import CrudState from '../../model/state/CrudState';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { PagedDto } from '../../model/dto/PagedDto';
import { Dto } from '../../model/dto/Dto';
import { copy } from '../../common/Util';
import { ViewType } from '../../model/state/page/ViewType'; 

const reducer = <T extends ListState<CrudState>>(
        loadFn: (dtos: PagedDto<Dto>, state: T) => T, 
        defaultState: T,
        context?
    ): Reducer<T> => {
        return (state: T = defaultState, action: Action): T => {
            if(action.context !== context) return state;

            switch(action.type) {
                // case ActionType.CRUD_OPEN_EDIT: //2
                    

                case ActionType.CRUD_INIT:
                    const newState = copy<T>(state);
                    newState.list = action.payload;
                    return newState;

                case ActionType.CRUD_TOGGLE_VIEW:
                    state.view = state.view == ViewType.TABLE
                        ? ViewType.GRID
                        : ViewType.TABLE
                    return copy<T>(state);

                case ActionType.CRUD_ADD_SUCCESS:
                    state.list.push(action.payload);
                    return copy<T>(state);

                default: return state;
            }
        }
}

export default reducer;