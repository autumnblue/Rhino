import { Dto } from './Dto';

export interface CampaignDto extends Dto {
    id: number,
    title: string,
    description: string,
    client: {
        id: number
        name: string
    }
}