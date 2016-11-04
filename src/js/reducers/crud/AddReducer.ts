import { Reducer } from 'redux';
import { CrupdateState } from '../../model/state/CrupdateState';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

const shortCurcuit = (state: CrupdateState, action: Action) => {
     return !state.visible 
        && action.type !== ActionType.CRUD_OPEN_ADD
}

export const reducer = <T extends CrupdateState>(
        defaultStateFn: () => T,
        reduce?: (state: T, action: Action) => T
    ): Reducer<T> => {   
        return (state: T = defaultStateFn(), action: Action): T => {
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
                    const reseted = defaultStateFn();
                    reseted.visible = false;
                    return reseted;

                case ActionType.CRUD_INVALID_SUBMIT:
                    return action.payload;
            }
            
            if(reduce) return reduce(state, action);

            return state;
        }
}