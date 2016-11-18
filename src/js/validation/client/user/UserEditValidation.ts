import { UserEditState } from '../../../model/state/UserState';
import { UserFormValidation } from './UserFormValidation';

export class UserEditValidation extends UserFormValidation<UserEditState> {
    constructor(state: UserEditState) {
        super(state);
    }
    
    public static validate(state: UserEditState): UserEditState {
        const validator = new this(state);
        validator.validateUsername();
        validator.validateFirstName()
        validator.validateLastName()
        validator.validateEmail()
        
        return validator.finalize();
    }
}