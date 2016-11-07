import { CommitableDto } from './CommitableDto';

export interface ClientDto extends CommitableDto {
    name: string,
    url: string,
    default_time_zone: string
}