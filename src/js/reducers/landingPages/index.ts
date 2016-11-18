import reduce from '../common';
import LandingPageState from '../../model/stateZ/landingPage/LandingPageState'
import LandingPageRecord from '../../model/stateZ/landingPage/LandingPageRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new LandingPageState(), new LandingPageRecord(), (state: LandingPageState, action: Action) => {
    switch(action.type) {
        case ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_POPULATED:
            state.selectedRecord.scraperUserAgent.loading = false;
            state.selectedRecord.scraperUserAgent.suggestions = action.payload;
            return copy<LandingPageState>(state);

        case ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_LOADING:
            state.selectedRecord.scraperUserAgent.loading = true;
            return copy<LandingPageState>(state);

        case ActionType.OPEN_EDITOR:
            state.widgetState.editorOn = true;
            return copy<LandingPageState>(state);

        case ActionType.EDITOR_OK:
            state.widgetState.editorOn = false;
            state.selectedRecord.source = action.payload;
            return copy<LandingPageState>(state);

        case ActionType.EDITOR_CANCEL:
            state.widgetState.editorOn = false;
            return copy<LandingPageState>(state);

        default: return state;
    }
});