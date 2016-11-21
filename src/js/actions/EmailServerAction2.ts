import ActionCreator from './ActionCreator';
import EmailServerService from '../service/EmailServerService';
import EmailServerMapper from '../mappers/EmailServerMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class EmailServerAction extends ActionCreator<EmailServerService> {
    private static QUALIFIER = 'emailServer';

    constructor() {
        super(EmailServerService, EmailServerMapper, EmailServerAction.QUALIFIER)
    }
}

export default new EmailServerAction();