import { ListState } from './page/ListState';
import { FormState } from './FormState';
import { CrupdateState } from './CrupdateState';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

export type PageState = ListState<LandingPages>; 

interface LandingPages {
    id?: number,
    name: string,
    url: string,
    path: string,
    status: number, //TODO: enum
    pageType: string,
    scraperUserAgent: number,
    dateCreated: string
}

export interface AddState extends CrupdateState { 
    input?: Form
}

export type EditState = AddState;

export interface Form extends FormState {
    domainName: ValidatableInput;
}