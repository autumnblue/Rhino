import { CampaignDto } from '../../model/dto/CampaignDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface ICampaignService extends Service {
    create(dto: any): Promise<any>;
    read(): Promise<any>;
    readSingle(id: number): Promise<any>;
    update(dto: any): Promise<any>;
    delete(id: number): Promise<void>;
    doCall(params: string): Promise<any>;
}