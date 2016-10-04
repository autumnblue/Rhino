import { IIdentityService } from './IIdentityService';
import { CredentialDto } from '../../model/dto/CredentialDto';
import { AuthzResponseDto } from '../../model/dto/AuthzResponseDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';
import * as popsicle from 'popsicle';

export class IdentityService implements IIdentityService {
    public async login(dto: CredentialDto): Promise<AuthzResponseDto> {
        return;
    }

    public async validate(dto: CredentialDto): Promise<ValidationResponseDto> {
        return;
    }
}