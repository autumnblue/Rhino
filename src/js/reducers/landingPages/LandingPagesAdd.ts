import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { AddState } from '../../model/state/LandingPagesState';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import * as add from '../crud/AddReducer';

const defaultAddState = (): AddState => {
    return {
        input: {
                domainName: new ValidatableInput()
            },
        visible: false,
        isValid: false
    }
}

export const reducer = add.reducer<AddState>(defaultAddState, (state, action) => {
    const newState = copy<AddState>(state);
    switch(action.type) {
        case ActionType.PHISHING_DOMAIN_CHANGE_DOMAIN_NAME_INPUT:
            newState.input.domainName.value = action.payload;
            return newState;

        default: return state;
    }
});

