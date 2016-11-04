import { isBlank, isEmail, errCheck } from '../../ValidationUtil';
import { AddState } from '../../../model/state/ClientState';
import { FormValidation } from '../FormValidation';
import { InputState } from '../InputState';

export class ClientFormValidation extends FormValidation<AddState> {
    constructor(state: AddState) {
        super(state);
    }

    public static validate(state: AddState): AddState {
        const validator = new this(state);
        validator.validateName();
        validator.validateUrl();
        validator.validateTimezone();
        
        return validator.finalize();
    }

    public validateName() {
        errCheck(
            this.state.input.name,
            value => 
                isBlank(value),
            'Name required.'
        )        
    }

    public validateUrl() {
        errCheck(
            this.state.input.url,
            value => 
                isBlank(value),
            'Url required.'
        )        
    }

    public validateTimezone() {
        errCheck(
            this.state.input.timezone,
            value => 
                isBlank(value),
            'Timezone required.'
        )        
    }
}