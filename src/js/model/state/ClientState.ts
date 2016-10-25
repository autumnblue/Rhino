import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { FieldState } from './FieldState';
import { AddState } from './AddState';
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

export interface ClientAddState extends AddState { 
    input?: AddFields 
}

export interface AddFields extends FieldState {
    name: ValidatableInput,
    url: ValidatableInput,
    timezone: ValidatableInput
}
