import CrudService from './CrudServiceZ';
import CampaignDto from '../model/dtoZ/campaign/CampaignDto';
import * as http from './HttpUtil';

class CampaignService extends CrudService<CampaignDto, any> {
    constructor() {
        super('campaigns');
    }

    public async getSuggestions(): Promise<{ campaigns: CampaignDto[] }> {
        return http.get<{ campaigns: CampaignDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default CampaignService;