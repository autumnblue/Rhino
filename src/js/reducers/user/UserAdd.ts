//http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { UserAddState } from '../../model/state/UserState';
import { UserDto } from '../../model/dto/UserDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultAddState: UserAddState = {
    input: {
            username: new ValidatableInput(),
            email: new ValidatableInput(),
            firstName: new ValidatableInput(),
            lastName: new ValidatableInput(),
            password: new ValidatableInput(),
            confirm: new ValidatableInput()
        },
    visible: false,
    isValid: false
}

export const reducer: Reducer<UserAddState> = (state: UserAddState = defaultAddState, action: Action): UserAddState => {
    const newState = copy<UserAddState>(state);
    
    switch(action.type) {
        case ActionType.USER_OPEN_ADD:
            newState.visible = true;
            return newState;

        case ActionType.USER_CANCEL_ADD:
            newState.visible = false;
            return newState;
       
        default: return state;
    }
};
