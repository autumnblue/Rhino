import { CommitableDto } from './CommitableDto';

export interface CampaignDto extends CommitableDto {
    name: string,
    description: string,
    client: number
}