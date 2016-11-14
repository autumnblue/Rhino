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

    public getCampaignSuggestions(dispatch): void {
        dispatch({
            type: ActionType.CAMPAIGN_SUGGESTIONS_LOADING,
            context: EngagementAction.QUALIFIER
        });

        new CampaignService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.campaigns.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.CAMPAIGN_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: EngagementAction.QUALIFIER
            });
        })
    }

    public getPhishingDomainSuggestions(dispatch): void {
        dispatch({
            type: ActionType.PHISHING_DOMAIN_SUGGESTIONS_LOADING,
            context: EngagementAction.QUALIFIER
        });

        new PhishingDomainService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.phishing_domains.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.domain_name
            }))

            dispatch({
                type: ActionType.PHISHING_DOMAIN_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: EngagementAction.QUALIFIER
            });
        })
    }

    public getScheduleSuggestions(dispatch): void {
        dispatch({
            type: ActionType.SCHEDULE_SUGGESTIONS_LOADING,
            context: EngagementAction.QUALIFIER
        });

        new ScheduleService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.schedule_intervals.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.SCHEDULE_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: EngagementAction.QUALIFIER
            });
        })
    }

    public getEmailServerSuggestions(dispatch): void {
        dispatch({
            type: ActionType.EMAIL_SERVER_SUGGESTIONS_LOADING,
            context: EngagementAction.QUALIFIER
        });

        new EmailServerService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.email_servers.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.login
            }))

            dispatch({
                type: ActionType.EMAIL_SERVER_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: EngagementAction.QUALIFIER
            });
        })
    }

    public getEmailTemplateSuggestions(dispatch): void {
        dispatch({
            type: ActionType.EMAIL_TEMPLATE_SUGGESTIONS_LOADING,
            context: EngagementAction.QUALIFIER
        });

        new EmailTemplateService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.email_templates.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.subject_header
            }))

            dispatch({
                type: ActionType.EMAIL_TEMPLATE_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: EngagementAction.QUALIFIER
            });
        })
    }

    public getLandingPageSuggestions(dispatch): void {
        dispatch({
            type: ActionType.LANDING_PAGE_SUGGESTIONS_LOADING,
            context: EngagementAction.QUALIFIER
        });

        new LandingPageService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.landing_pages.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.LANDING_PAGE_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: EngagementAction.QUALIFIER
            });
        })
    }

    public getRedirectPageSuggestions(dispatch): void {
        dispatch({
            type: ActionType.REDIRECT_PAGE_SUGGESTIONS_LOADING,
            context: EngagementAction.QUALIFIER
        });

        new RedirectPageService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.landing_pages.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.REDIRECT_PAGE_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: EngagementAction.QUALIFIER
            });
        })
    }
}

export default new EngagementAction();