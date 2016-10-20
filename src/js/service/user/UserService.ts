import { Service } from '../Service';
import { IUserService } from './IUserService';
import { PagedDto } from '../../model/dto/PagedDto';
import { UserDto } from '../../model/dto/UserDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';
import * as http from '../HttpUtil';

export class UserService extends Service implements IUserService {
    public async readUsers(): Promise<PagedDto<UserDto>> {
        return http.get<PagedDto<UserDto>>
                    (`${this.baseServiceUrl()}/v1/users/`);
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