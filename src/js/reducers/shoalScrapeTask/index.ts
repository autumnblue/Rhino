import reduce from '../common';
import ShoalScrapeTaskState from '../../model/stateZ/shoalScrapeTask/ShoalScrapeTaskState'
import ShoalScrapeTaskRecord from '../../model/stateZ/shoalScrapeTask/ShoalScrapeTaskRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new ShoalScrapeTaskState(), new ShoalScrapeTaskRecord(), (state: ShoalScrapeTaskState, action: Action) => {
    switch(action.type) {
        case ActionType.SHOAL_SCRAPE_CRED_SUGGESTIONS_POPULATED:
            state.selectedRecord.shoalScrapeCreds.loading = false;
            state.selectedRecord.shoalScrapeCreds.suggestions = action.payload;
            return copy<ShoalScrapeTaskState>(state);

        case ActionType.SHOAL_SCRAPE_CRED_SUGGESTIONS_LOADING:
            state.selectedRecord.shoalScrapeCreds.loading = true;
            return copy<ShoalScrapeTaskState>(state);

        default: return state;
    }
});