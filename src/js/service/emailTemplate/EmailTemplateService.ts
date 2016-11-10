import { IEmailTemplateService } from './IEmailTemplateService';
import EmailTemplateDto from '../../model/dto2/emailTemplate/EmailTemplateDto';
import EmailTemplateXDto from '../../model/dto2/emailTemplate/EmailTemplateXDto';
import { CrudService } from '../CrudService';
import { PagedDto } from '../../model/dto/PagedDto';
import * as factory from '../ServiceFactory';
import { ServiceType } from '../ServiceFactory';
import * as http from '../HttpUtil';


class EmailTemplateService extends CrudService<EmailTemplateDto> implements IEmailTemplateService {
    constructor() {
        super('email-templates');
    }

    public async read(): Promise<EmailTemplateXDto> {
        const url = 'https://sandbar-dev.rhino.lan/api/v1/email-templates';
        return http.dynamicGetX<EmailTemplateXDto>(url);
    }
}

export default EmailTemplateService;