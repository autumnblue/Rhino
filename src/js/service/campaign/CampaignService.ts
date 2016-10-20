import { Service } from '../Service';
import { ICampaignService } from './ICampaignService';
import { CampaignDto } from '../../model/dto/CampaignDto';

export class CampaignService extends Service implements ICampaignService {
    public readCampaignList(): CampaignDto[] {
        return;
    }
}