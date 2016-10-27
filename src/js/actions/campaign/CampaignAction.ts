import { CrudActionCreator } from '../crud/CrudActionCreator'
import { ICampaignService } from '../../service/campaign/ICampaignService';
import { ServiceType } from '../../service/ServiceFactory';


class ActionCreator extends CrudActionCreator<ICampaignService> {
    constructor() {
        super(ServiceType.CAMPAIGN);
    }
}

export const CampaignAction: ActionCreator = new ActionCreator();