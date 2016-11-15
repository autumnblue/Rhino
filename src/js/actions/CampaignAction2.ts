import ActionCreator from './ActionCreator';
import CampaignService from '../service/CampaignService';
import ClientService from '../service/ClientService';
import CampaignMapper from '../mappers/CampaignMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class CampaignAction extends ActionCreator<CampaignService> {
    private static QUALIFIER = 'campaign';

    constructor() {
        super(CampaignService, CampaignMapper, CampaignAction.QUALIFIER)
    }

    public getClientSuggestions(dispatch): void {
        dispatch({
            type: ActionType.CLIENT_SUGGESTIONS_LOADING,
            context: CampaignAction.QUALIFIER
        });

        new ClientService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.clients.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.CLIENT_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: CampaignAction.QUALIFIER
            });
        })
    }
}

export default new CampaignAction();