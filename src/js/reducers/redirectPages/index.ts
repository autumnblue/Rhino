import reduce from '../common';
import RedirectPageState from '../../model/stateZ/redirectPage/RedirectPageState'
import RedirectPageRecord from '../../model/stateZ/redirectPage/RedirectPageRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new RedirectPageState(), new RedirectPageRecord(), (state: RedirectPageState, action: Action) => {
    switch(action.type) {
        case ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_POPULATED:
            state.selectedRecord.scraperUserAgent.loading = false;
            state.selectedRecord.scraperUserAgent.suggestions = action.payload;
            return copy<RedirectPageState>(state);

        case ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_LOADING:
            state.selectedRecord.scraperUserAgent.loading = true;
            return copy<RedirectPageState>(state);

        case ActionType.OPEN_EDITOR:
            state.widgetState.editorOn = true;
            return copy<RedirectPageState>(state);

        default: return state;
    }
});