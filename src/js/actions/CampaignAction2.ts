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
}

export default new CampaignAction();