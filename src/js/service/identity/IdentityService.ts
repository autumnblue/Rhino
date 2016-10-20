import { IIdentityService } from './IIdentityService';
import { Service } from '../Service';
import { CredentialDto } from '../../model/dto/CredentialDto';
import { AuthzResponseDto } from '../../model/dto/AuthzResponseDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';
import * as http from '../HttpUtil';

export class IdentityService extends Service implements IIdentityService {
    public async login(dto: CredentialDto): Promise<AuthzResponseDto> {
        return await http.post<AuthzResponseDto>
                    (`${this.baseServiceUrl()}/v1/token/`, dto, false);
    }

    public async validate(dto: CredentialDto): Promise<ValidationResponseDto> {
        return;
    }
}