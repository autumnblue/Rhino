import { Dto } from './Dto';

export interface ClientDto extends Dto {
    id?: number,
    name: string,
    url: string,
    default_time_zone: number //unix time; TODO consider moment.js
    commit?: boolean
}