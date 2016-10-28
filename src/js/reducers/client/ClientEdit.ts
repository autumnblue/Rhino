import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { EditState } from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import * as edit from '../crud/EditReducer';

const defaultEditState = (): EditState => {
    return {
        input: {
                name: new ValidatableInput(),
                url: new ValidatableInput(),
                timezone: new ValidatableInput()
            },
        visible: false,
        isValid: false
    }
}

const load = (dto: ClientDto): EditState => {
    let state: EditState = { isValid: false }
    state.input = {
        name: new ValidatableInput(dto.name),
        url: new ValidatableInput(dto.url),
        timezone: new ValidatableInput(dto.default_time_zone)
    }

    return state;
}

export const reducer = edit.reducer<EditState>(defaultEditState, load, (state, action) => {
    const newState = copy<EditState>(state);
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

