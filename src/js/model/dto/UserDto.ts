import { Dto } from './Dto';

export interface UserDto extends Dto {
    id?: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    password?: string,
    is_active?: boolean,
    commit?: boolean
}