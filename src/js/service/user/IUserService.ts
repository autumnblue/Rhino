import { UserDto } from '../../model/dto/UserDto';

export interface IUserService {
    readUsers(): Promise<UserDto[]>;
    readSingleUser(id: number): Promise<UserDto>;
}