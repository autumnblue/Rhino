import { FormState } from './FormState';
import { IMessage } from '../../common/message/IMessage';

export interface CrupdateState {
    id?: number
    alert?: IMessage
    visible?: boolean
    input?: FormState;
    isValid: boolean;
}