import { IMessage } from '../message/IMessage';
import { MessageType } from '../message/MessageType';
 
export class ValidatableInput {
    value = '';
    validationMsg: IMessage;
    isError() {
        return this.validationMsg.type === MessageType.ERROR
    }
}