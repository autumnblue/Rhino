import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import CampaignState from '../../model/state2/campaign/CampaignState';
import { copy } from '../../common/Util';
import { ViewType } from '../../model/state/page/ViewType'; 

type State = CampaignState;

const nstate = new CampaignState();

export const reducer: Reducer<State> = (state = nstate, action: Action): State => {
    if(state.context != 'campaign') return state;

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
            state.forms = state.forms && state.forms.filter(form => form.id !== action.payload)
            return copy<State>(state);

        //case ActionType.CRUD_INVALID_SUBMIT:
                
        default: return state;
    }
};

export default reducer;

// const QUALIFIER = 'campaign';

// const root = rootReduce<ListState<CampaignState>>(null, new ListState<CampaignState>(QUALIFIER), QUALIFIER);
// const add = addReduce<CampaignState>(new CampaignState(QUALIFIER), QUALIFIER);
// const edit = editReduce<CampaignState>(new CampaignState(QUALIFIER), null, QUALIFIER); 

// const campaign = combineReducers<CampaignState>({
//     root: root,
//     add: add,
//     edit: edit
// });

// export default campaign;