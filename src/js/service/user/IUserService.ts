import { UserDto } from '../../model/dto/UserDto';
import { PagedDto } from '../../model/dto/PagedDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';
import { Service } from '../Service';

export interface IUserService extends Service {
    readUsers(): Promise<PagedDto<UserDto>>;
    readSingleUser(id: number): Promise<UserDto>;
    validate(dto: UserDto): Promise<ValidationResponseDto>;
    updateUser(dto: UserDto): Promise<UserDto>;
    createUser(dto: UserDto): Promise<UserDto>;
    deleteUser(id: number): Promise<any>;
}