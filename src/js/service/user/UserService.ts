import { IUserService } from './IUserService';
import { UserDto } from '../../model/dto/UserDto';

export class UserService implements IUserService {
    public async readUsers(): Promise<UserDto[]> {
        return null
    }
}