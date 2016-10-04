import { Dto } from './Dto';

export interface AuthzResponseDto extends Dto {
    bearerToken: string,
    refreshToken: string
}