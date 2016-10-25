import { ValidatableInput } from '../../common/validation/ValidatableInput';

export interface FieldState {
    input: { [field: string]: ValidatableInput }
}