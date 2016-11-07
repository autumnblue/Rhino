import CrudActionCreator from '../crud/CrudActionCreator'
import { ICampaignService } from '../../service/campaign/ICampaignService';
import { ServiceType } from '../../service/ServiceFactory';
import State from '../../model/state/CampaignState';
import { CampaignDto } from '../../model/dto/CampaignDto';


class ActionCreator extends CrudActionCreator<ICampaignService> {
    constructor() {
        super(ServiceType.CAMPAIGN);
    }

    protected mapToDto(obj: State): CampaignDto {
        return {
            name: obj.name, 
            description: obj.description,
            client: null
        }
    }
}

const CampaignAction: ActionCreator = new ActionCreator();
export default CampaignAction;