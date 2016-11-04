import { ListState } from './page/ListState';
import { FormState } from './FormState';
import { CrupdateState } from './CrupdateState';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

export type PageState = ListState<PhishingDomain>; 

interface PhishingDomain {
    id?: number,
    domainName: string
}

export interface AddState extends CrupdateState { 
    input?: Form
}

export type EditState = AddState;

export interface Form extends FormState {
    domainName: ValidatableInput;
}