import { Reducer } from 'redux';
import CrudState from '../../model/state/CrudState';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

const reducer = <T extends CrudState>(
        defaultState: T,
        context?,
        reduce?: (state: T, action: Action) => T,
    ): Reducer<T> => {   
        return (state: T = defaultState, action: Action): T => {
            if(action.context !== context) return state;
            const newState = copy<T>(state);    

            switch(action.type) {
                case ActionType.CRUD_OPEN_ADD:
                    newState.visible = true;
                    return newState;

                case ActionType.CRUD_CANCEL:
                    newState.visible = false;
                    return newState;

                case ActionType.CRUD_ADD_SUCCESS:
                    const reset = copy<T>(defaultState);
                    reset.visible = false;
                    return reset;

                case ActionType.CRUD_INVALID_SUBMIT:
                    return action.payload;
            }
            
            if(reduce) return reduce(state, action);

            return state;
        }
}

export default reducer;