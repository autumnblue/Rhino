import PagedDto from '../PagedDto'
import EngagementDto from './EngagementDto';
import LandingPageDto from '../landingPage/LandingPageDto';
import PhishingDomainDto from '../phishingDomain/PhishingDomainDto';
import CampaignDto from '../campaign/CampaignDto';
import EmailTemplateDto from '../emailTemplate/EmailTemplateDto';
import ScheduleDto from '../schedule/ScheduleDto';
import EmailServerDto from '../emailServer/EmailServerDto';


interface EngagementXDto extends PagedDto {
    engagements: EngagementDto[];
    landing_pages: LandingPageDto[];
    phishing_domains: PhishingDomainDto[];
    campaigns: CampaignDto[];
    email_templates: EmailTemplateDto[];
    schedule_intervals: ScheduleDto[];
    email_servers: EmailServerDto[];
}

export default EngagementXDto;

