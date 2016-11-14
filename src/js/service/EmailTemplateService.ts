import CrudService from './CrudServiceZ';
import EmailTemplateDto from '../model/dtoZ/emailTemplate/EmailTemplateDto';
import * as http from './HttpUtil';

class EmailTemplateService extends CrudService<EmailTemplateDto, any> {
    constructor() {
        super('email-templates');
    }

    public async getSuggestions(): Promise<{ email_templates: EmailTemplateDto[] }> {
        return http.get<{ email_templates: EmailTemplateDto[] }>
            (`${this.resource}?exclude[]=*&include[]=subject_header&include[]=id`);
    }
}

export default EmailTemplateService;