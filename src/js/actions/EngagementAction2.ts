import ActionCreator from './ActionCreator';
import EngagementService from '../service/EngagementService';
import CampaignService from '../service/CampaignService';
import ScheduleService from '../service/ScheduleService';
import EmailServerService from '../service/EmailServerService';
import EmailTemplateService from '../service/EmailTemplateService';
import LandingPageService from '../service/LandingPageService';
import RedirectPageService from '../service/RedirectPageService';
import PhishingDomainService from '../service/PhishingDomainService';
import VectorEmailService from '../service/VectorEmailService';
import PreviewService from '../service/PreviewService';
import EngagementMapper from '../mappers/EngagementMapperZ';
import EngagementRecord from '../model/stateZ/engagement/EngagementRecord'
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class EngagementAction extends ActionCreator<EngagementService> {
    private static QUALIFIER = 'engagement';

    constructor() {
        super(EngagementService, EngagementMapper, EngagementAction.QUALIFIER)
    }

    public fetch(): Function {
        return (dispatch) => 
        new EngagementService().read()
        .then(dtos => {
            const state = EngagementMapper.toState(dtos);

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
                context: this.qualifier
            });
        });
    }

    public openEdit(id: number): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_EDIT,
                payload: id,
                context: this.qualifier
            });
        }
    }

    public openAdd(): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_ADD,
                context: this.qualifier
            });
        }
    }

    public filterByClient(id: number): Function {
        if(!id) return this.fetch();

        return (dispatch) => 
        new EngagementService().filterByClient(id)
        .then(dtos => {
            const state = EngagementMapper.toState(dtos);

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
                context: this.qualifier
            });
        });
    }

    public previewEmailForEngagement(id: number): Promise<string> {
        return new VectorEmailService()
        .getVectorEmailForEngagement(id)
        .then(result => {
            return new PreviewService().previewEmail(result.id);
        });
    }

    public previewLandingPage(id: number): Promise<string> {
        return new PreviewService().previewLandingPage(id);
    }

    public previewRedirectPage(id: number): Promise<string> {
        return new PreviewService().previewRedirectPage(id);
    }

    public togglePreview(record?: EngagementRecord): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.ENGAGEMENT_TOGGLE_PREVIEW,
                payload: record,
                // context: this.qualifier
            });    
        }
    }

    public start(id: number): Function {
        return(dispatch) => {
            new EngagementService()
            .start(id)
            .then(dto => {
                dispatch({
                    type: ActionType.ENGAGEMENT_START,
                    payload: dto.state,
                    context: this.qualifier
                });
            });    
        }
    }

    public stop(id: number): Function {
        return(dispatch) => {
            new EngagementService()
            .stop(id)
            .then(dto => {
                dispatch({
                    type: ActionType.ENGAGEMENT_STOP,
                    payload: dto.state,
                    context: this.qualifier
                });
            });    
        }
    }
}

export default new EngagementAction();