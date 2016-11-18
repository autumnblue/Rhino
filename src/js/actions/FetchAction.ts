import CampaignService from '../service/CampaignService';
import ScheduleService from '../service/ScheduleService';
import EmailServerService from '../service/EmailServerService';
import EmailTemplateService from '../service/EmailTemplateService';
import LandingPageService from '../service/LandingPageService';
import RedirectPageService from '../service/RedirectPageService';
import PhishingDomainService from '../service/PhishingDomainService';
import ScraperUserAgentService from '../service/ScraperUserAgentService';
import Ref from '../model/stateZ/Ref';

class FetchAction {
    public getCampaignSuggestions(dispatch): Promise<Ref[]> {
        return new CampaignService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.campaigns.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getPhishingDomainSuggestions(dispatch): Promise<Ref[]> {
        return new PhishingDomainService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.phishing_domains.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.domain_name
            }))
        });
    }

    public getScheduleSuggestions(dispatch): Promise<Ref[]> {
        return new ScheduleService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.schedule_intervals.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getEmailServerSuggestions(dispatch): Promise<Ref[]> {
        return new EmailServerService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.email_servers.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.login
            }))
        });
    }

    public getEmailTemplateSuggestions(dispatch): Promise<Ref[]> {
        return new EmailTemplateService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.email_templates.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.subject_header
            }))
        });
    }

    public getLandingPageSuggestions(dispatch): Promise<Ref[]> {
        return new LandingPageService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.landing_pages.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getRedirectPageSuggestions(dispatch): Promise<Ref[]> {
        return new RedirectPageService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.landing_pages.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getScraperUserAgentSuggestions(dispatch): Promise<Ref[]> {
        return new ScraperUserAgentService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.scraper_user_agents.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }
}

export default new FetchAction();