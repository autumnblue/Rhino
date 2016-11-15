import PagedDto from '../PagedDto'
import OAuthResultDto from './OAuthResultDto';
import OAuthEngagementDto from '../oAuthEngagement/OAuthEngagementDto';
import OAuthConsumerDto from '../oAuthConsumer/OAuthConsumerDto';

interface OAuthResultXDto extends PagedDto {
    o_auth_results: OAuthResultDto[];
    o_auth_engagements: OAuthEngagementDto[];
    o_auth_consumer: OAuthConsumerDto[];
}

export default OAuthResultXDto;

