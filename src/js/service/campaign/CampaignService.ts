import { ICampaignService } from './ICampaignService';
import { CampaignDto } from '../../model/dto/CampaignDto';
import { CrudService } from '../CrudService';

export class CampaignService extends CrudService<CampaignDto> implements ICampaignService {
    constructor() {
        super('campaigns');
    }
}