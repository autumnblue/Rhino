import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { FormState } from './FormState';
import { CrupdateState } from './CrupdateState';
import { ListState } from './page/ListState';

export interface ClientState {
    read: Client | Client[],
    input: any
}

export type ClientPageState = ListState<Client>; 

interface Client {
    id?: number,
    name: string,
    url: string,
    timezone: any
}

export interface ClientAddState extends CrupdateState { 
    input?: AddFields 
}

export interface AddFields extends FormState {
    name: ValidatableInput,
    url: ValidatableInput,
    timezone: ValidatableInput
}
