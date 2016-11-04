import { Reducer } from 'redux';
import CrudState from '../../model/state/CrudState';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

const shortCurcuit = (state: CrudState, action: Action) => {
     return !state.visible 
        && action.type !== ActionType.CRUD_OPEN_ADD
}

const reducer = <T extends CrudState>(
        defaultState: T,
        reduce?: (state: T, action: Action) => T
    ): Reducer<T> => {   
        return (state: T = defaultState, action: Action): T => {
            if(shortCurcuit(state, action)) return state;
            const newState = copy<T>(state);    

            switch(action.type) {
                case ActionType.CRUD_OPEN_ADD:
                    newState.visible = true;
                    return newState;

                case ActionType.CRUD_CANCEL_ADD:
                    newState.visible = false;
                    return newState;

                case ActionType.CRUD_ADD_SUCCESS:
                    const reseted = defaultState;
                    reseted.visible = false;
                    return reseted;

                case ActionType.CRUD_INVALID_SUBMIT:
                    return action.payload;
            }
            
            if(reduce) return reduce(state, action);

            return state;
        }
}

export default reducer;