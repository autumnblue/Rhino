import { IUserService } from './IUserService';
import { Service } from '../Service';
import { UserDto } from '../../model/dto/UserDto';
import { PagedDto } from '../../model/dto/PagedDto';
import * as popsicle from 'popsicle';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';

export class MockUserService extends Service implements IUserService {
    public async readUsers(): Promise<PagedDto<UserDto>> {
        return await popsicle.get('http://localhost:3000/auth_user')
            .then((response) => {
                return(JSON.parse(response.body));
            })
    }

    public async createUser(dto: UserDto): Promise<UserDto> {
        return null;    
    }

    public async readSingleUser(id: number): Promise<UserDto> {
        return await popsicle.get(`http://localhost:3000/auth_user?id=eq.${id}`)
            .then((response) => {
                return(JSON.parse(response.body))[0];
            })
    }

    public async validate(dto: UserDto): Promise<ValidationResponseDto> {
        return;
    }

    public async updateUser(dto: UserDto): Promise<UserDto> {
        return;
    }

    public async deleteUser(id: number): Promise<any> {
        return;
    }
}