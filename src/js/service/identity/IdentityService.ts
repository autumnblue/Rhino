import { IIdentityService } from './IIdentityService';
import { Service } from '../Service';
import { CredentialDto } from '../../model/dto/CredentialDto';
import { AuthzResponseDto } from '../../model/dto/AuthzResponseDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';
import * as http from '../HttpUtil';

export class IdentityService extends Service implements IIdentityService {
    private url: string;

    constructor() {
        super();
        this.url = `${this.baseServiceUrl()}/v1/token/`;
    }

    public async login(dto: CredentialDto): Promise<AuthzResponseDto> {
        return await http.post<AuthzResponseDto>
                    (`${this.url}`, dto, false);
    }

    public async refresh(token: string): Promise<AuthzResponseDto> {
        return await http.post<AuthzResponseDto>
                    (`${this.url}refresh/`, { token: token }, false);
    }

    public async validate(dto: CredentialDto): Promise<ValidationResponseDto> {
        return;
    }
}