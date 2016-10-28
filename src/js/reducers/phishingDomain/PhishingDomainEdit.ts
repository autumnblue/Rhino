import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { EditState } from '../../model/state/PhishingDomainState';
import { PhishingDomainDto } from '../../model/dto/PhishingDomainDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import * as edit from '../crud/EditReducer';

const defaultEditState = (): EditState => {
    return {
        input: {
                domainName: new ValidatableInput()
            },
        visible: false,
        isValid: false
    }
}

const load = (dto: PhishingDomainDto): EditState => {
    let state: EditState = { isValid: false }
    state.input = {
        domainName: new ValidatableInput(dto.domain_name)
    }

    return state;
}

export const reducer = edit.reducer<EditState>(defaultEditState, load, (state, action) => {
    const newState = copy<EditState>(state);
    switch(action.type) {
        case ActionType.PHISHING_DOMAIN_CHANGE_DOMAIN_NAME_INPUT:
            newState.input.domainName.value = action.payload;
            return newState;

        default: return state;
    }
});

