import reduce from '../common';
import CampaignState from '../../model/stateZ/campaign/CampaignState'
import CampaignRecord from '../../model/stateZ/campaign/CampaignRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new CampaignState(), new CampaignRecord(), (state: CampaignState, action: Action) => {
    switch(action.type) {
        case ActionType.CLIENT_SUGGESTIONS_POPULATED:
            state.selectedRecord.client.loading = false;
            state.selectedRecord.client.suggestions = action.payload;
            return copy<CampaignState>(state);

        case ActionType.CLIENT_SUGGESTIONS_LOADING:
            state.selectedRecord.client.loading = true;
            return copy<CampaignState>(state);

        default: return state;
    }
});