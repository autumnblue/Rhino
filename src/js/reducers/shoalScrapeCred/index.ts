import reduce from '../common';
import ShoalScrapeCredState from '../../model/stateZ/shoalScrapeCred/ShoalScrapeCredState'
import ShoalScrapeCredRecord from '../../model/stateZ/shoalScrapeCred/ShoalScrapeCredRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new ShoalScrapeCredState(), new ShoalScrapeCredRecord(), (state: ShoalScrapeCredState, action: Action) => {
    switch(action.type) {
        case ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_POPULATED:
            state.selectedRecord.scraperUserAgent.loading = false;
            state.selectedRecord.scraperUserAgent.suggestions = action.payload;
            return copy<ShoalScrapeCredState>(state);

        case ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_LOADING:
            state.selectedRecord.scraperUserAgent.loading = true;
            return copy<ShoalScrapeCredState>(state);

        default: return state;
    }
});