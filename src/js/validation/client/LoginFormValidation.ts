import { LoginState } from '../../model/state/LoginState';
import { isBlank, errCheck } from '../ValidationUtil';
import { MessageType } from '../../common/message/MessageType';
import { IMessage } from '../../common/message/IMessage';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { FormValidation } from './FormValidation';

export class LoginFormValidation extends FormValidation<LoginState> {
    constructor(state: LoginState) {
        super(state);
    }
    
    public static validate(state: LoginState): LoginState {
        return new this(state)
            .validateHost()
            .validatePort()
            .validateUsername()
            .validatePassword()
            .finalize();
    }

    private validateHost(): LoginFormValidation {
        errCheck(
            this.state.input.host,
            value => 
                isBlank(value),
            'Host required.'
        )
        return this;
    }

    private validatePort() {
        errCheck(
            this.state.input.port,
            value => 
                value
                && !Number.isInteger(parseInt(value)),
            'Optional port must be a number.'
        )
        return this;
    }

    private validateUsername() {
        errCheck(
            this.state.input.username,
            value => 
                isBlank(value),
            'Username required.'
        )
        return this;
    }

    private validatePassword() {
        errCheck(
            this.state.input.password,
            value => 
                isBlank(value),
            'Password required.'
        )
        return this;
    }
}