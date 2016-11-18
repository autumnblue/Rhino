import { ValidatableInput } from '../../common/validation/ValidatableInput';

export interface FormState {
   [input: string]: ValidatableInput
}