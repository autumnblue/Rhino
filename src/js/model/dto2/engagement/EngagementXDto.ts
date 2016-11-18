import EngagementDto from './EngagementDto';
import LandingPageDto from '../landingPage/LandingPageDto';
import PhishingDomainDto from '../phishingDomain/PhishingDomainDto';
import CampaignDto from '../campaign/CampaignDto';
import EmailTemplateDto from '../emailTemplate/EmailTemplateDto';
import ScheduleDto from '../schedule/ScheduleDto';
import EmailServerDto from '../emailServer/EmailServerDto';

class EngagementXDto {
    engagements: EngagementDto[] = [];
    landing_pages: LandingPageDto[] = [];
    phishing_domains: PhishingDomainDto[] = [];
    campaigns: CampaignDto[] = [];
    email_templates: EmailTemplateDto[] = [];
    schedule_intervals: ScheduleDto[] = [];
    email_servers: EmailServerDto[] = [];
}

export default EngagementXDto;

//https://sandbar-dev.rhino.lan/api/v1/engagements/?include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include=schedule_intervals.*&include[]=redirect_page.*&include[]=email_server