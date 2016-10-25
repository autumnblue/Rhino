import { ValidatableInput } from '../common/validation/ValidatableInput';
import { copy } from '../common/Util';
import { MessageType } from '../common/message/MessageType';

export const isBlank = (str: string) => {
    return !str || str.trim() === '';
}

export const isEmail = (str: string) => {
    return str.indexOf('@') > -1; 
}

const validate = (field: ValidatableInput, predicate: (value: string) => boolean, failMsg: string, type: MessageType) => {
    if(predicate(field.value)) {
        field.validationMsg = {
            value: failMsg,
            type: type
        };
    }
    else
        field.validationMsg = null; 
}

export const errCheck = (field: ValidatableInput, predicate: (value: string) => boolean, failMsg: string) => {
    validate(field, predicate, failMsg, MessageType.ERROR);
}

const inError = (input: ValidatableInput) => {
    return input.validationMsg
    && input.validationMsg.type === MessageType.ERROR
}

export const finalize = <T extends { input?: any, isValid: boolean }>(state: T): T => {
    const input = state.input;

    state.isValid = Object.keys(input)
        .map(key => {
            const errd = input[key]  
                ? inError((<ValidatableInput>input[key]))
                : null
            return !errd;
        })
        .reduce((prev, curr) => {
            return prev && curr;
        });

    return copy<T>(state);
}
