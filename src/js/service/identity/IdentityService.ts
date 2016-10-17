import { IIdentityService } from './IIdentityService';
import { CredentialDto } from '../../model/dto/CredentialDto';
import { AuthzResponseDto } from '../../model/dto/AuthzResponseDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';
import * as popsicle from 'popsicle';

export class IdentityService implements IIdentityService {
    public async login(dto: CredentialDto): Promise<AuthzResponseDto> {
        console.log('!!!!!!')
        return await popsicle.request({
            method: 'POST',
            url: 'https://sandbar-dev.rhino.lan/api/v1/token/',
            body: dto,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .use(popsicle.plugins.parse('json'))
        .then(response => {
            console.log(response);
        });
    }

    public async validate(dto: CredentialDto): Promise<ValidationResponseDto> {
        return;
    }
}