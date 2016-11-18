import CrudService from './CrudServiceZ';
import EngagementDto from '../model/dtoZ/engagement/EngagementDto';
import CampaignDto from '../model/dtoZ/campaign/CampaignDto';
import EngagementXDto from '../model/dtoZ/engagement/EngagementXDto';
import * as http from './HttpUtil';

class EngagementService extends CrudService<EngagementDto, EngagementXDto> {
    constructor() {
        super('engagements');
    }

    public async read(): Promise<EngagementXDto> {
        return http.get<EngagementXDto>
            (`${this.resource}?include[]=interval.*&include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include[]=redirect_page.*&include[]=email_server.*`);
    }
}

export default EngagementService;