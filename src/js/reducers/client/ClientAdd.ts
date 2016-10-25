import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { ClientAddState } from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultAddState: ClientAddState = {
    input: {
            name: new ValidatableInput(),
            url: new ValidatableInput(),
            timezone: new ValidatableInput(),
        },
    visible: false,
    isValid: false
}

export const reducer: Reducer<ClientAddState> = (state: ClientAddState = defaultAddState, action: Action): ClientAddState => {   
    if(!state.visible 
        && action.type !== ActionType.CRUD_OPEN_ADD)
            return state; 
    
    const newState = copy<ClientAddState>(state);
    
    switch(action.type) {
        case ActionType.CRUD_OPEN_ADD:
            newState.visible = true;
            return newState;

        case ActionType.CRUD_CANCEL_ADD:
            newState.visible = false;
            return newState;

        case ActionType.CRUD_ADD_SUCCESS:
            const reseted = defaultAddState;
            reseted.visible = false;
            return reseted;
       
        default: return state;
    }
};
