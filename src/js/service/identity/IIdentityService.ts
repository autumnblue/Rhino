import { CredentialDto } from '../../model/dto/CredentialDto';
import { AuthzResponseDto } from '../../model/dto/AuthzResponseDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';
import { Service } from '../Service';

export interface IIdentityService extends Service {
    login(dto: CredentialDto): Promise<AuthzResponseDto>;
    validate(dto: CredentialDto): Promise<ValidationResponseDto>;
}