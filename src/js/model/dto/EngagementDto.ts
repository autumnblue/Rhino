import { Dto } from './Dto';

export interface EngagementDto extends Dto {
    state: number
    name: string
    description: string
    campaign: number
    email_template: number
    landing_page: number
    target_lists: number[]
}