import { ListState } from './page/ListState';
import { FormState } from './FormState';
import { CrupdateState } from './CrupdateState';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

export type EmailServerPageState = ListState<EmailServer>; 

interface EmailServer {
    id?: number,
    login: string,
    host: string
}

export interface EmailServerAddState extends CrupdateState { 
    input?: EmailServerForm 
}

export type EmailServerEditState = EmailServerAddState;

export interface EmailServerForm extends FormState {
    useTls: ValidatableInput
    testRecipient: ValidatableInput
    host: ValidatableInput
    port: ValidatableInput
    login: ValidatableInput
    password: ValidatableInput
}