import { CredentialDto } from '../../model/dto/CredentialDto';
import { AuthzResponseDto } from '../../model/dto/AuthzResponseDto';
import { ValidationResponseDto } from '../../model/dto/ValidationResponseDto';

export interface IIdentityService {
    login(dto: CredentialDto): Promise<AuthzResponseDto>;
    validate(dto: CredentialDto): Promise<ValidationResponseDto>;
}