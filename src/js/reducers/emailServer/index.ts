import reduce from '../common';
import EmailServerState from '../../model/stateZ/emailServer/EmailServerState'
import EmailServerRecord from '../../model/stateZ/emailServer/EmailServerRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(
    new EmailServerState(), 
    new EmailServerRecord(),
    (state: EmailServerState, action: Action) => {
        if(action.type == ActionType.EMAIL_SERVER_EMAIL_CHECK) {
            const newState = copy<EmailServerState>(state);
            newState.selectedRecord.checkEmailMessage = action.payload;
            return newState;
        }
    });