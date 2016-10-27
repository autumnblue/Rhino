import { Dto } from './Dto';

export interface CampaignDto extends Dto {
    id: number,
    name: string,
    description: string,
    client: number
}