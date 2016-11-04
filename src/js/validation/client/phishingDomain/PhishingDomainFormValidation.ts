import { AddState } from '../../../model/state/PhishingDomainState';
import { FormValidation } from '../FormValidation';
import { InputState } from '../InputState';

export class PhishingDomainFormValidation extends FormValidation<AddState> {
    constructor(state: AddState) {
        super(state);
    }

    public static validate(state: AddState): AddState {
        const validator = new this(state);
        validator.validateDomainName();
        
        return validator.finalize();
    }

    public validateDomainName() {
        return; 
    }
}