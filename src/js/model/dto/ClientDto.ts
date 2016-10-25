import { Dto } from './Dto';

export interface ClientDto extends Dto {
    id?: number,
    name: string,
    url: string,
    timezone: number //unix time; TODO consider moment.js
    commit?: boolean
}