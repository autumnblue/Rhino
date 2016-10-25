import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { FieldState } from './FieldState';
import { AddState } from './AddState';

export interface ClientState {
    read: Client | Client[],
    input: any
}

interface Client {
    id: number,
    name: string,
    url: string,
    timezone: any
}

export type ClientAddState = AddState & { input?: AddFields }

export interface AddFields extends FieldState {
    name: ValidatableInput,
    url: ValidatableInput,
    timezone: ValidatableInput
}
