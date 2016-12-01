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
            (`${this.resource}?include[]=interval.*&include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include[]=redirect_page.*&include[]=email_server.*&include[]=target_lists.*&per_page=30`);
    }

    public async filterByClient(id: number): Promise<EngagementXDto> {
        return new CampaignService().filterByClient(id)
        .then(result => {
            const qryString = result.campaigns.map(campaign => {
                return `filter{campaign}=${campaign.id}`
            })
            .join('&');

            return http.get<EngagementXDto>
                (`${this.resource}?${qryString}&include[]=interval.*&include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include[]=redirect_page.*&include[]=email_server.*&per_page=30`);
        });
    }

    public async start(id: number): Promise<EngagementDto> {
        return http.put<any>
            (`${this.resource}${id}`, {
                state: 4,
                commit: true
            })
            .then(result => {
                return result.engagement;
            });
    }

    public async stop(id: number): Promise<EngagementDto> {
        return http.put<any>
            (`${this.resource}${id}`, {
                state: 0,
                commit: true
            })
            .then(result => {
                return result.engagement;
            });
    }
}

export default EngagementService;