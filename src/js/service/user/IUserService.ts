import { UserDto } from '../../model/dto/UserDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';

export interface IUserService {
    readUsers(): Promise<UserDto[]>;
    readSingleUser(id: number): Promise<UserDto>;
    validate(dto: UserDto): Promise<ValidationResponseDto>;
    updateUser(dto: UserDto): Promise<number>;
}