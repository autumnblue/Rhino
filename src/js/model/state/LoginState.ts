import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { IMessage } from '../../common/message/IMessage';

export interface LoginState {
    alert?: IMessage
    input?: Fields
    isValid: boolean 
}

interface Fields {
    host: ValidatableInput 
    port: ValidatableInput
    username: ValidatableInput
    password: ValidatableInput
}