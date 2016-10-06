import { IUserService } from './IUserService';
import { UserDto } from '../../model/dto/UserDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';

export class UserService implements IUserService {
    public async readUsers(): Promise<UserDto[]> {
        return null
    }

    public async readSingleUser(id: number): Promise<UserDto> {
        return null
    }

    public async validate(dto: UserDto): Promise<ValidationResponseDto> {
        return;
    }

    public async updateUser(dto: UserDto): Promise<number> {
        return;
    }
}