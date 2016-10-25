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

    public async createUser(dto: UserDto): Promise<UserDto> {
        return http.post<UserDto>
                    (`${this.baseServiceUrl()}/v1/users/`, dto);    
    }

    public async readSingleUser(id: number): Promise<UserDto> {
        return http.get<UserDto>
            (`${this.baseServiceUrl()}/v1/users/${id}/`);
    }

    public async updateUser(dto: UserDto): Promise<UserDto> {
         return http.put<UserDto>
                (`${this.baseServiceUrl()}/v1/users/${dto.id}/`, dto);
    }

    public async deleteUser(id: number): Promise<any> {
        return http.del<UserDto>
            (`${this.baseServiceUrl()}/v1/users/${id}/`);
    }

    public async validate(dto: UserDto): Promise<ValidationResponseDto> {
        return;
    }
}