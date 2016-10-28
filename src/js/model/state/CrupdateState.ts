import { FormState } from './FormState';
import { IMessage } from '../../common/message/IMessage';

export interface CrupdateState {
    alert?: IMessage
    visible?: boolean
    input?: FormState;
    isValid: boolean;
}