import EmailTemplateDto from '../../model/dto2/emailTemplate/EmailTemplateDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IEmailTemplateService extends Service {
    create(dto: any): Promise<any>;
    read(): Promise<any>;
    readSingle(id: number): Promise<any>;
    update(dto: any): Promise<any>;
    delete(id: number): Promise<void>;
    doCall(params: string): Promise<any>;
}