import { CrudActionCreator } from '../crud/CrudActionCreator'
import { IEngagementService } from '../../service/engagement/IEngagementService';
import { ServiceType } from '../../service/ServiceFactory';


class ActionCreator extends CrudActionCreator<IEngagementService> {
    constructor() {
        super(ServiceType.ENGAGEMENT);
    }
}

export const EngagementAction: ActionCreator = new ActionCreator();