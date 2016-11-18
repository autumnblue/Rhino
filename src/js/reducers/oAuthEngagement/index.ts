import reduce from '../common';
import OAuthEngagementState from '../../model/stateZ/oAuthEngagement/OAuthEngagementState'
import OAuthEngagementRecord from '../../model/stateZ/oAuthEngagement/OAuthEngagementRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new OAuthEngagementState(), new OAuthEngagementRecord(), (state: OAuthEngagementState, action: Action) => {
    switch(action.type) {
        case ActionType.CAMPAIGN_SUGGESTIONS_POPULATED:
            state.selectedRecord.campaign.loading = false;
            state.selectedRecord.campaign.suggestions = action.payload;
            return copy<OAuthEngagementState>(state);

        case ActionType.CAMPAIGN_SUGGESTIONS_LOADING:
            state.selectedRecord.campaign.loading = true;
            return copy<OAuthEngagementState>(state);

        case ActionType.O_AUTH_CONSUMER_SUGGESTIONS_POPULATED:
            state.selectedRecord.oAuthConsumer.loading = false;
            state.selectedRecord.oAuthConsumer.suggestions = action.payload;
            return copy<OAuthEngagementState>(state);

        case ActionType.O_AUTH_CONSUMER_SUGGESTIONS_LOADING:
            state.selectedRecord.oAuthConsumer.loading = true;
            return copy<OAuthEngagementState>(state);

        case ActionType.SCHEDULE_SUGGESTIONS_POPULATED:
            state.selectedRecord.schedule.loading = false;
            state.selectedRecord.schedule.suggestions = action.payload;
            return copy<OAuthEngagementState>(state);

        case ActionType.SCHEDULE_SUGGESTIONS_LOADING:
            state.selectedRecord.schedule.loading = true;
            return copy<OAuthEngagementState>(state);

        case ActionType.EMAIL_SERVER_SUGGESTIONS_POPULATED:
            state.selectedRecord.emailServer.loading = false;
            state.selectedRecord.emailServer.suggestions = action.payload;
            return copy<OAuthEngagementState>(state);

        case ActionType.EMAIL_SERVER_SUGGESTIONS_LOADING:
            state.selectedRecord.emailServer.loading = true;
            return copy<OAuthEngagementState>(state);

        case ActionType.EMAIL_TEMPLATE_SUGGESTIONS_POPULATED:
            state.selectedRecord.emailTemplate.loading = false;
            state.selectedRecord.emailTemplate.suggestions = action.payload;
            return copy<OAuthEngagementState>(state);

        case ActionType.EMAIL_TEMPLATE_SUGGESTIONS_LOADING:
            state.selectedRecord.emailTemplate.loading = true;
            return copy<OAuthEngagementState>(state);
        
        default: return state;
    }
});