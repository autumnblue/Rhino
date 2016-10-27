import { CampaignDto } from '../../model/dto/CampaignDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';


export interface ICampaignService extends Service {
    create(dto: CampaignDto): Promise<CampaignDto>;
    read(): Promise<PagedDto<CampaignDto>>;
    readSingle(id: number): Promise<CampaignDto>;
    update(dto: CampaignDto): Promise<CampaignDto>;
    delete(id: number): Promise<void>;
}