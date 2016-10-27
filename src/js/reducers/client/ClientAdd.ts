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

        case ActionType.CLIENT_CHANGE_NAME_INPUT:
            newState.input.name.value = action.payload;
            return newState;

        case ActionType.CLIENT_CHANGE_URL_INPUT:
            newState.input.url.value = action.payload;
            return newState;

        case ActionType.CLIENT_SELECT_TIMEZONE:
            newState.input.timezone.value = action.payload;
            return newState;
       
        default: return state;
    }
};
