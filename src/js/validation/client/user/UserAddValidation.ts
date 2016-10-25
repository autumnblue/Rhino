import { UserAddState } from '../../../model/state/UserState';
import { UserFormValidation } from './UserFormValidation';
import { isBlank, isEmail, errCheck } from '../../ValidationUtil';

export class UserAddValidation extends UserFormValidation<UserAddState> {
    constructor(state: UserAddState) {
        super(state);
    }
    
    public static validate(state: UserAddState): UserAddState {
        const validator = new this(state);
        validator.validateUsername();
        validator.validatePassword()
        validator.validateConfirmPassword()
        validator.validateFirstName()
        validator.validateLastName()
        validator.validateEmail()
        
        return validator.finalize();
    }

    private validatePassword() {
         errCheck(
            this.state.input.password,
            value => 
                isBlank(value),
            'Password required.'
        )
    }

    private validateConfirmPassword() {
        errCheck(
            this.state.input.password,
            value => 
                value !== this.state.input.password.value,
            'Passwords do not match.'
        )
    }
}