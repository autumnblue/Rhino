import ActionCreator from './ActionCreator';
import EmailTemplateService from '../service/EmailTemplateService';
import EmailTemplateMapper from '../mappers/EmailTemplateMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class EmailTemplateAction extends ActionCreator<EmailTemplateService> {
    private static QUALIFIER = 'emailTemplate';

    constructor() {
        super(EmailTemplateService, EmailTemplateMapper, EmailTemplateAction.QUALIFIER)
    }
}

export default new EmailTemplateAction();