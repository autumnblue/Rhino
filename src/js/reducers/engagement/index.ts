import reduce from '../common';
import EngagementState from '../../model/stateZ/engagement/EngagementState'
import EngagementRecord from '../../model/stateZ/engagement/EngagementRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new EngagementState(), new EngagementRecord(), (state: EngagementState, action: Action) => {
    switch(action.type) {
        case ActionType.CAMPAIGN_SUGGESTIONS_POPULATED:
            state.selectedRecord.campaign.loading = false;
            state.selectedRecord.campaign.suggestions = action.payload;
            return copy<EngagementState>(state);

        case ActionType.CAMPAIGN_SUGGESTIONS_LOADING:
            state.selectedRecord.campaign.loading = true;
            return copy<EngagementState>(state);

        case ActionType.PHISHING_DOMAIN_SUGGESTIONS_POPULATED:
            state.selectedRecord.phishingDomain.loading = false;
            state.selectedRecord.phishingDomain.suggestions = action.payload;
            return copy<EngagementState>(state);

        case ActionType.PHISHING_DOMAIN_SUGGESTIONS_LOADING:
            state.selectedRecord.phishingDomain.loading = true;
            return copy<EngagementState>(state);

        case ActionType.SCHEDULE_SUGGESTIONS_POPULATED:
            state.selectedRecord.schedule.loading = false;
            state.selectedRecord.schedule.suggestions = action.payload;
            return copy<EngagementState>(state);

        case ActionType.SCHEDULE_SUGGESTIONS_LOADING:
            state.selectedRecord.schedule.loading = true;
            return copy<EngagementState>(state);

        case ActionType.EMAIL_SERVER_SUGGESTIONS_POPULATED:
            state.selectedRecord.emailServer.loading = false;
            state.selectedRecord.emailServer.suggestions = action.payload;
            return copy<EngagementState>(state);

        case ActionType.EMAIL_SERVER_SUGGESTIONS_LOADING:
            state.selectedRecord.emailServer.loading = true;
            return copy<EngagementState>(state);

        case ActionType.EMAIL_TEMPLATE_SUGGESTIONS_POPULATED:
            state.selectedRecord.emailTemplate.loading = false;
            state.selectedRecord.emailTemplate.suggestions = action.payload;
            return copy<EngagementState>(state);

        case ActionType.EMAIL_TEMPLATE_SUGGESTIONS_LOADING:
            state.selectedRecord.emailTemplate.loading = true;
            return copy<EngagementState>(state);
        
        case ActionType.LANDING_PAGE_SUGGESTIONS_POPULATED:
            state.selectedRecord.landingPage.loading = false;
            state.selectedRecord.landingPage.suggestions = action.payload;
            return copy<EngagementState>(state);

        case ActionType.LANDING_PAGE_SUGGESTIONS_LOADING:
            state.selectedRecord.landingPage.loading = true;
            return copy<EngagementState>(state);

        case ActionType.REDIRECT_PAGE_SUGGESTIONS_POPULATED:
            state.selectedRecord.redirectPage.loading = false;
            state.selectedRecord.redirectPage.suggestions = action.payload;
            return copy<EngagementState>(state);

        case ActionType.REDIRECT_PAGE_SUGGESTIONS_LOADING:
            state.selectedRecord.redirectPage.loading = true;
            return copy<EngagementState>(state);
        
        default: return state;
    }
});