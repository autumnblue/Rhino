import ActionCreator from './ActionCreator';
import EngagementService from '../service/EngagementService';
import CampaignService from '../service/CampaignService';
import ScheduleService from '../service/ScheduleService';
import EmailServerService from '../service/EmailServerService';
import EmailTemplateService from '../service/EmailTemplateService';
import LandingPageService from '../service/LandingPageService';
import RedirectPageService from '../service/RedirectPageService';
import PhishingDomainService from '../service/PhishingDomainService';
import EngagementMapper from '../mappers/EngagementMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class EngagementAction extends ActionCreator<EngagementService> {
    private static QUALIFIER = 'engagement';

    constructor() {
        super(EngagementService, EngagementMapper, EngagementAction.QUALIFIER)
    }
}

export default new EngagementAction();