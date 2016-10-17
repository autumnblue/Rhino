import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { copy } from '../../common/Util';
import { MessageType } from '../../common/message/MessageType';

export abstract class FormValidation<T extends { input?: any, isValid: boolean }> {
    protected state: T;
    
    constructor(state: T) {
        this.state = state;
    }

    protected handle(field: ValidatableInput) {
        return new MessageHandler(field);
    }

    protected handle2(rules: Array<{ closure: () => boolean, errMsg: string }>) {
        let messages = new Array<string>();

        rules.forEach(rule => {
            if(rule.closure()) messages.push(rule.errMsg);
        });

        if(messages.length < 1) {
            //clear
        }
    }

    protected finalize(): T {
        const input = this.state.input;

        this.state.isValid = Object.keys(input)
            .map(key => {
                const errd = input[key]  
                    ? this.inError((<ValidatableInput>input[key]))
                    : null
                return !errd;
            })
            .reduce((prev, curr) => {
                return prev && curr;
            });

        return copy<T>(this.state);
    }

    private inError(input: ValidatableInput) {
         return input.validationMsg
            && input.validationMsg.type === MessageType.ERROR
    }
}

class MessageHandler {
    private field: ValidatableInput;

    constructor(field: ValidatableInput) {
        this.field = field;
    }

    public value(): any {
        return this.field.value;
    }

    public err(message: string) {
        this.field.validationMsg = {
            value: message,
            type: MessageType.ERROR    
        }
    }

    public clear() {
        this.field.validationMsg = null;
    }
}