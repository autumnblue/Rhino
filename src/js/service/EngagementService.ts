import CrudService from './CrudServiceZ';
import EngagementDto from '../model/dtoZ/engagement/EngagementDto';
import CampaignDto from '../model/dtoZ/campaign/CampaignDto';
import EngagementXDto from '../model/dtoZ/engagement/EngagementXDto';
import CampaignService from './CampaignService';
import * as http from './HttpUtil';

class EngagementService extends CrudService<EngagementDto, EngagementXDto> {
    constructor() {
        super('engagements');
    }

    public async read(): Promise<EngagementXDto> {
        return http.get<EngagementXDto>
            (`${this.resource}?include[]=interval.*&include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include[]=redirect_page.*&include[]=email_server.*`);
    }

    public async filterByClient(id: number): Promise<EngagementXDto> {
        return new CampaignService().filterByClient(id)
        .then(result => {
            const qryString = result.campaigns.map(campaign => {
                return `filter{campaign}=${campaign.id}`
            })
            .join('&');

            return http.get<EngagementXDto>
                (`${this.resource}?${qryString}&include[]=interval.*&include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include[]=redirect_page.*&include[]=email_server.*`);
        });
    }
}

export default EngagementService;