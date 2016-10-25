import { FieldState } from './FieldState';
import { IMessage } from '../../common/message/IMessage';

export interface AddState {
    alert?: IMessage
    visible?: boolean
    input?: FieldState;
    isValid: boolean;
}