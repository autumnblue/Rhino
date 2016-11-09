import { CommitableDto } from './CommitableDto';

export interface RedirectPagesDto extends CommitableDto {
    name: string,
    url: string,
    path: string,
    status: number,
    page_type: string,
    scraper_user_agent: number,
    date_created: string
}