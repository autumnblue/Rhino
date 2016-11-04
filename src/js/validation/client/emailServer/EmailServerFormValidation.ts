import { 
        isBlank, 
        isEmail, 
        isNumber, 
        errCheck, 
        errChecks, 
        rule } from '../../ValidationUtil';
import { EmailServerAddState } from '../../../model/state/EmailServerState';
import { FormValidation } from '../FormValidation';
import { InputState } from '../InputState';

export class EmailServerFormValidation extends FormValidation<EmailServerAddState> {
    constructor(state: EmailServerAddState) {
        super(state);
    }

    public static validate(state: EmailServerAddState): EmailServerAddState {
        const validator = new this(state);
        validator.validateUseTls();
        validator.validateTestRecipient();
        validator.validateHost();
        validator.validateLogin();
        validator.validatePassword();
        validator.validatePort();
        
        return validator.finalize();
    }

    public validateUseTls() {
        return; 
    }

    public validateTestRecipient() {
        return;
    }

    public validateHost() {
        errCheck(
            this.state.input.host,
            value => 
                isBlank(value),
            'Host is required.'
        )        
    }

    public validateLogin() {
        errCheck(
            this.state.input.login,
            value => 
                isBlank(value),
            'Login is required.'
        )        
    }

    public validatePassword() {
        errCheck(
            this.state.input.password,
            value => 
                isBlank(value),
            'Password is required.'
        )        
    }

    public validatePort() {
        errChecks(
            this.state.input.port,
            [ 
                rule(
                    value =>
                        isBlank(value),
                    'Port must be a number.'
                ),
                 rule(
                    value =>
                        !isNumber(value),
                    'Port must be a number.'
                )
            ]
        )  
    }
}