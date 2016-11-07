import CrudActionCreator from '../crud/CrudActionCreator'
import { ILandingPagesService } from '../../service/landingPages/ILandingPagesService';
import { ServiceType } from '../../service/ServiceFactory';
import State from '../../model/state/LandingPagesState';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';

class ActionCreator extends CrudActionCreator<ILandingPagesService> {
    constructor() {
        super(ServiceType.LANDING_PAGES);
    }

    protected mapToDto(obj: State): LandingPagesDto {
        return {
            name: obj.name,
            url: obj.url,
            path: obj.path,
            status: Number(obj.status),
            page_type: obj.pageType,
            scraper_user_agent: Number(obj.scraperUserAgent),
            date_created: obj.dateCreated
        }
    }
}

const LandingPagesAction: ActionCreator = new ActionCreator();
export default LandingPagesAction;