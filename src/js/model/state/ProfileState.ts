import { ValidatableInput } from '../../common/validation/ValidatableInput';

export interface ProfileState {
    input?: Fields
    isValid: boolean 
}

interface Fields {
    password: ValidatableInput
    newPassword: ValidatableInput 
    confirm: ValidatableInput
}