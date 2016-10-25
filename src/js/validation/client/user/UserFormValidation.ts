import { isBlank, isEmail, errCheck } from '../../ValidationUtil';
import { UserEditState, UserAddState } from '../../../model/state/UserState';
import { FormValidation } from '../FormValidation';
import { InputState } from '../InputState';

export abstract class UserFormValidation<T extends InputState> extends FormValidation<T>{
    constructor(state: T) {
        super(state);
    }
    
    protected validateUsername() {
        errCheck(
            this.state.input.username,
            value => 
                isBlank(value),
            'Username required.'
        )
    }

    protected validateFirstName() {
        errCheck(
            this.state.input.firstName,
            value => 
                isBlank(value),
            'First name required.'
        )
    }

    protected validateLastName() {
        errCheck(
            this.state.input.lastName,
            value => 
                isBlank(value),
            'Last name required.'
        )
    }

    protected validateEmail() {
        errCheck(
            this.state.input.email,
            value => 
                !isEmail(value),
            'Incorrect email format.'
        )
        
        errCheck(
            this.state.input.email,
            value => 
                isBlank(value),
            'Email required.'
        )
    }
}