import CrudActionCreator from '../crud/CrudActionCreator'
import { IEmailServerService } from '../../service/emailServer/IEmailServerService';
import { ServiceType } from '../../service/ServiceFactory';
import State from '../../model/state/EmailServerState';
import { EmailServerDto } from '../../model/dto/EmailServerDto';

class ActionCreator extends CrudActionCreator<IEmailServerService> {
    constructor() {
        super(ServiceType.EMAIL_SERVER);
    }

    protected mapToDto(obj: State): EmailServerDto {
        return {
            use_tls: obj.useTls,
            test_recipient: obj.testRecipient,
            host: obj.host,
            port: obj.port,
            login: obj.login,
            password: obj.password
        }
    }
}

const EmailServerAction: ActionCreator = new ActionCreator();
export default EmailServerAction;