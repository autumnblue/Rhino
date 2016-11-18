import { IEmailServerService } from './IEmailServerService';
import { CrudService } from '../CrudService';
import EmailServerDto from '../../model/dto2/emailServer/EmailServerDto';
import EmailServerXDto from '../../model/dto2/emailServer/EmailServerXDto';
import * as http from '../HttpUtil';

class EmailServerService extends CrudService<EmailServerDto> implements IEmailServerService {
    constructor() {
        super('email-servers');
    }

    public async read(): Promise<EmailServerXDto> {
        const url = 'https://sandbar-dev.rhino.lan/api/v1/email-servers';
        return http.dynamicGetX<EmailServerXDto>(url);
    }
}

export default EmailServerService;