import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { MenuState } from '../../model/state/MenuState';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { Identity } from '../../security/Identity';

const defaultState: MenuState = {
    identity: { selected: false }, 
    config: { selected: false }
}

const unselectAll = (state: MenuState) => {
    for(const menu in state) {
        state[menu].selected = false;
    }
}

export const reducer: Reducer<MenuState> = (state = defaultState, action: Action): MenuState => {
    const newState = copy<MenuState>(state);

    switch(action.type) {
        case(ActionType.MENU_CLICK_ID):
            unselectAll(newState);
            newState.identity.selected = true;
            return newState;

        case(ActionType.MENU_CLICK_CONFIG):
            unselectAll(newState);
            newState.config.selected = true;
            return newState;
        
        default: return state;
    }
};