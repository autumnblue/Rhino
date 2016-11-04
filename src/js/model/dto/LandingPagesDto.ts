import { CommitableDto } from './CommitableDto';

export interface LandingPagesDto extends CommitableDto {
    name: string,
    url: string,
    path: string,
    status: number,
    page_type: string,
    scraper_user_agent: number,
    date_created: string
}