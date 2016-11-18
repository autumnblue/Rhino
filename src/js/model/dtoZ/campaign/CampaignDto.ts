import CommitableDto from '../CommitableDto';

interface CampaignDto extends CommitableDto {
    "url": string,
    "client": number,
    "description": string,
    "name": string
}

export default CampaignDto;