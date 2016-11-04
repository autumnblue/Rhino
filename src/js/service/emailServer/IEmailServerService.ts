import { EmailServerDto } from '../../model/dto/EmailServerDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IEmailServerService extends Service {
    create(dto: EmailServerDto): Promise<EmailServerDto>;
    read(): Promise<PagedDto<EmailServerDto>>;
    readSingle(id: number): Promise<EmailServerDto>;
    update(dto: EmailServerDto): Promise<EmailServerDto>;
    delete(id: number): Promise<void>;
}