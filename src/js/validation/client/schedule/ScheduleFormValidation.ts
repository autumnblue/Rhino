import { AddState } from '../../../model/state/ScheduleState';
import { FormValidation } from '../FormValidation';
import { InputState } from '../InputState';

export class ScheduleFormValidation extends FormValidation<AddState> {
    constructor(state: AddState) {
        super(state);
    }

    public static validate(state: AddState): AddState {
        const validator = new this(state);
        validator.validateName();
        validator.validateBatchSize();
        validator.validateEmailSendInterval();
        validator.validateBatchInterval();
        validator.validateStartSending();
        
        return validator.finalize();
    }

    public validateName() {
        return; 
    }

    public validateBatchSize() {
        return;
    }

    public validateEmailSendInterval() {
        return;
    }

    public validateBatchInterval() {
        return;
    }

    public validateStartSending() {
        return;
    }
}