import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { FormState } from './FormState';
import { CrupdateState } from './CrupdateState';
import { ListState } from './page/ListState';

export type PageState = ListState<Client>; 

interface Client {
    id?: number,
    name: string,
    url: string,
    timezone: any
}

export interface AddState extends CrupdateState { 
    input?: Form
}

export type EditState = AddState;

export interface Form extends FormState {
    name: ValidatableInput,
    url: ValidatableInput,
    timezone: ValidatableInput
}
