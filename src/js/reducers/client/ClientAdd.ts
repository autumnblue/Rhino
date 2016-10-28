import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { AddState } from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { CurrentUser } from '../../CurrentUser';
import * as add from '../crud/AddReducer';

const defaultAddState = (): AddState => ({
    input: {
            name: new ValidatableInput(),
            url: new ValidatableInput(),
            timezone: new ValidatableInput(),
        },
    visible: false,
    isValid: false
});

export const reducer = add.reducer<AddState>(defaultAddState, (state, action) => {
    const newState = copy<AddState>(state);

     switch(action.type) {
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
}); 

