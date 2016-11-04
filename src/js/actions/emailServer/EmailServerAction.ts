import { CrudActionCreator } from '../crud/CrudActionCreator'
import { IEmailServerService } from '../../service/emailServer/IEmailServerService';
import { ServiceType } from '../../service/ServiceFactory';


class ActionCreator extends CrudActionCreator<IEmailServerService> {
    constructor() {
        super(ServiceType.EMAIL_SERVER);
    }
}

export const EmailServerAction: ActionCreator = new ActionCreator();