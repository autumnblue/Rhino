import { ListState } from './page/ListState';

export interface CampaignState {
    id: number,
    name: string,
    description: string,
    client: string,
    link: string
}   

export type CampaignPageState = ListState<Campaign>; 

interface Campaign {
    id?: number,
    name: string
    description: string,
    client: string,
}