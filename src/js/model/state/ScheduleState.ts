import { ListState } from './page/ListState';
import { FormState } from './FormState';
import { CrupdateState } from './CrupdateState';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

export type PageState = ListState<Schedule>; 

interface Schedule {
    id?: number,
    name: string
}

export interface AddState extends CrupdateState { 
    input?: Form
}

export type EditState = AddState;

export interface Form extends FormState {
    name: ValidatableInput    
    batchSize: ValidatableInput
    // emailSendInterval: ValidatableInput
    batchInterval: ValidatableInput
    sleepTime: ValidatableInput
    startSending: ValidatableInput
    startSendingAt?: ValidatableInput
}