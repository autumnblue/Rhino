import EngagementState from '../model/state2/engagement/EngagementState';
import EngagementForm from '../model/state2/engagement/EngagementForm';
import EngagementXDto from '../model/dto2/engagement/EngagementXDto';
import EngagementDto from '../model/dto2/engagement/EngagementDto';
import Dependee from '../model/state2/Dependee';

class EngagementMapperStatic {
    public toState = (dto: EngagementXDto): EngagementState => {
        const state = new EngagementState();

        state.forms = dto.engagements.map(engagement => {
            let landingPage
                = dto.landing_pages
                && dto.landing_pages.filter(obj => obj.id == engagement.landing_page)[0];
            let phishingDomain
                = dto.phishing_domains
                && dto.phishing_domains.filter(obj => obj.id == engagement.domain)[0];
            let campaign
                = dto.campaigns
                && dto.campaigns.filter(obj => obj.id == engagement.campaign)[0];
            let emailTemplate
                = dto.email_templates
                && dto.email_templates.filter(obj => obj.id == engagement.email_template)[0];
            let schedule
                = dto.schedule_intervals
                && dto.schedule_intervals.filter(obj => obj.id == engagement.interval)[0];
            let redirectPage
                = dto.landing_pages
                && dto.landing_pages.filter(obj => obj.id == engagement.landing_page && obj.is_redirect_page)[0];
            let emailServer
                = dto.email_servers
                && dto.email_servers.filter(obj => obj.id == engagement.email_server)[0];

            return {
                id: engagement.id,
                name: engagement.name,
                landingPage: landingPage && { id: landingPage.id, label: landingPage.name },
                phishingDomain: phishingDomain && { id: phishingDomain.id, label: phishingDomain.domain_name },
                campaign: campaign && { id: campaign.id, label: campaign.name },
                emailTemplate: emailTemplate && { id: emailTemplate.id, label: emailTemplate.name },
                schedule: schedule && { id: schedule.id, label: schedule.name },
                redirectPage: redirectPage && { id: redirectPage.id, label: redirectPage.name },
                emailServer: emailServer && { id: emailServer.id, label: emailServer.host },
                state: engagement.state,
                path: engagement.path,
                description: engagement.description
        }});

        state.dependencies = {
            landingPages: 
                dto.landing_pages 
                && dto.landing_pages.map(obj => ({ id: obj.id, label: obj.name })),
            phishingDomains: 
                dto.phishing_domains
                && dto.phishing_domains.map(obj => ({ id: obj.id, label: obj.domain_name })),
            campaigns: 
                dto.campaigns &&
                dto.campaigns.map(obj => ({ id: obj.id, label: obj.name })),
            emailTemplates: 
                dto.email_templates &&
                dto.email_templates.map(obj => ({ id: obj.id, label: obj.name })),
            schedules: 
                dto.schedule_intervals 
                && dto.schedule_intervals.map(obj => ({ id: obj.id, label: obj.name })),
            redirectPages:
                dto.landing_pages 
                && dto.landing_pages
                    .filter(obj => obj.is_redirect_page)
                    .map(obj => ({ id: obj.id, label: obj.name })),    
            emailServers: 
                dto.email_servers
                && dto.email_servers.map(obj => ({ id: obj.id, label: obj.host })),
        }

        //state.mode = 'ROOT';

        return state;
    }
    
    public toDto(form: EngagementForm): EngagementDto {
        return {
            "landing_page": form.landingPage && form.landingPage.id,
            "domain": form.phishingDomain && form.phishingDomain.id,
            "description": form.description && form.description,
            "campaign": form.campaign && form.campaign.id,
            "email_template": form.emailTemplate && form.emailTemplate.id,
            "interval": form.schedule && form.schedule.id,
            "redirect_page": form.redirectPage && form.redirectPage.id,
            "target_lists": null,
            "state": form.state,
            "path": form.path,
            "email_server": form.emailServer && form.emailServer.id,
            "id": form.id,
            "name": form.name
        }
    }
}
const EngagementMapper = new EngagementMapperStatic();
export default EngagementMapper;