import PagedDto from '../PagedDto'
import OAuthEngagementDto from './OAuthEngagementDto';
import LandingPageDto from '../landingPage/LandingPageDto';
import PhishingDomainDto from '../phishingDomain/PhishingDomainDto';
import CampaignDto from '../campaign/CampaignDto';
import EmailTemplateDto from '../emailTemplate/EmailTemplateDto';
import ScheduleDto from '../schedule/ScheduleDto';
import EmailServerDto from '../emailServer/EmailServerDto';


interface OAuthEngagementXDto extends PagedDto {
    o_auth_engagements: OAuthEngagementDto[];
    campaigns: CampaignDto[];
    email_templates: EmailTemplateDto[];
    schedule_intervals: ScheduleDto[];
    email_servers: EmailServerDto[];
}

export default OAuthEngagementXDto;

