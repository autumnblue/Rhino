import CampaignDto from './CampaignDto';
import ClientDto from '../client/ClientDto';

class CampaignXDto {
    campaigns: CampaignDto[] = [];
    clients: ClientDto[] = [];
}

export default CampaignXDto;

//https://sandbar-dev.rhino.lan/api/v1/campaigns/?include[]=client.*