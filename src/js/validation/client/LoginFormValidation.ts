import { LoginState } from '../../model/state/LoginState';
import { isBlank } from '../ValidationUtil';
import { MessageType } from '../../common/message/MessageType';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { FormValidation } from './FormValidation';

export class LoginFormValidation extends FormValidation<LoginState>{
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
        const host = this.handle(this.state.input.host);
        
        if(isBlank(host.value()))
            host.err('Host required.');
        else
            host.clear();

        return this;
    }

    private validatePort() {
        const port = this.handle(this.state.input.port);
        
        if(port.value() && !Number.isInteger(parseInt(port.value())))
            port.err('Optional port must be a number.');
        else
            port.clear();    

        return this;
    }

    private validateUsername() {
        return this;
    }

    private validatePassword() {
        return this;
    }
}