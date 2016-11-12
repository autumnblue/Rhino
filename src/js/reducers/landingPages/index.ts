import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import LandingPageState from '../../model/state2/landingPage/LandingPageState';
import { copy } from '../../common/Util';
import { ViewType } from '../../model/state/page/ViewType'; 

type State = LandingPageState;

const nstate = new LandingPageState();

export const reducer: Reducer<State> = (state = nstate, action: Action): State => {
    if(state.context != 'landingPage') return state;

    switch(action.type) {
        case ActionType.CRUD_INIT:
            return copy<State>(action.payload);

        case ActionType.CRUD_TOGGLE_VIEW:
            state.view = state.view == ViewType.TABLE
                ? ViewType.GRID
                : ViewType.TABLE
            return copy<State>(state);

        case ActionType.CRUD_OPEN_ADD:
            state.mode = 'ADD'
            return copy<State>(state);
                   
        case ActionType.CRUD_CANCEL:
            state.mode = 'ROOT'
            return copy<State>(state);
                  
        case ActionType.CRUD_ADD_SUCCESS:
            state.mode = 'ROOT'
            return copy<State>(state);        

        // case ActionType.CRUD_INVALID_SUBMIT:

        case ActionType.CRUD_OPEN_EDIT:
            state.mode = 'EDIT'
            state.selected = action.payload;
            return copy<State>(state);
                   
        case ActionType.CRUD_CANCEL:
            state.mode = 'ROOT'
            return copy<State>(state);

        case ActionType.CRUD_EDIT_SUCCESS:
            state.mode = 'ROOT'
            return copy<State>(state);

        case ActionType.CRUD_REMOVE_SUCCESS:
            state.mode = 'ROOT'
            state.forms = state.forms.filter(form => form.id !== action.payload)
            return copy<State>(state);

        //case ActionType.CRUD_INVALID_SUBMIT:
                
        default: return state;
    }
};

export default reducer;