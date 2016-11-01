import { CrudActionCreator } from '../crud/CrudActionCreator'
import { ILandingPagesService } from '../../service/landingPages/ILandingPagesService';
import { ServiceType } from '../../service/ServiceFactory';

class ActionCreator extends CrudActionCreator<ILandingPagesService> {
    constructor() {
        super(ServiceType.LANDING_PAGES);
    }
}

export const LandingPagesAction: ActionCreator = new ActionCreator();