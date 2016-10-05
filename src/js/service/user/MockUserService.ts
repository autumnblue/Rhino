import { IUserService } from './IUserService';
import { UserDto } from '../../model/dto/UserDto';
import * as popsicle from 'popsicle';

export class MockUserService implements IUserService {
    public async readUsers(): Promise<UserDto[]> {
        return await popsicle.get('http://localhost:3000/auth_user')
            .then((response) => {
                return(JSON.parse(response.body));
            })
    }

    public async readSingleUser(id: number): Promise<UserDto> {
        return await popsicle.get(`http://localhost:3000/auth_user?id=eq.${id}`)
            .then((response) => {
                return(JSON.parse(response.body))[0];
            })
    }
}