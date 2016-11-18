import { Dto } from './Dto';

export interface CommitableDto extends Dto {
    commit?: boolean
}