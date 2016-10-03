import { ValidatableInput } from '../../common/validation/ValidatableInput';

export interface LoginState {
    input?: Fields 
}

interface Fields {
    host: ValidatableInput 
    port: ValidatableInput
    username: ValidatableInput
    password: ValidatableInput
}