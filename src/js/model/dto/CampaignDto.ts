import { CommitableDto } from './CommitableDto';

export interface CampaignDto extends CommitableDto {
    name: string,
    description: string,
    client: {
        id: number,
        name: string
    },
    campaign_clients?: any[]
}