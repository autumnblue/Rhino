import { Reducer } from 'redux';
import { CrupdateState } from '../../model/state/CrupdateState';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';
import { Dto } from '../../model/dto/Dto';

const shortCurcuit = (state: CrupdateState, action: Action) => {
     return !state.visible 
        && action.type !== ActionType.CRUD_OPEN_EDIT
}

const reducer = <T extends CrupdateState>(
        defaultState: T,
        loadFn: (dto: Dto) => T,
        reduce?: (state: T, action: Action) => T
    ): Reducer<T> => {   
        return (state: T = defaultState, action: Action): T => {
            if(shortCurcuit(state, action)) return state;
            const newState = copy<T>(state);    

            switch(action.type) {
                case ActionType.CRUD_OPEN_EDIT:
                    const dto: Dto = action.payload;
                    const copied = copy<T>(loadFn(dto));
                    copied.id = dto.id; // ensure for DELETE
                    copied.visible = true;
                    return copied;

                case ActionType.CRUD_CANCEL_EDIT:
                    newState.visible = false;
                    return newState;

                case ActionType.CRUD_EDIT_SUCCESS:
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