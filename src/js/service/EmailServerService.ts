import CrudService from './CrudServiceZ';
import EmailServerDto from '../model/dtoZ/emailServer/EmailServerDto';
import * as http from './HttpUtil';

class EmailServerService extends CrudService<EmailServerDto, any> {
    constructor() {
        super('email-servers');
    }

    public async getSuggestions(): Promise<{ email_servers: EmailServerDto[] }> {
        return http.get<{ email_servers: EmailServerDto[] }>
            (`${this.resource}?exclude[]=*&include[]=login&include[]=id`);
    }
}

export default EmailServerService;