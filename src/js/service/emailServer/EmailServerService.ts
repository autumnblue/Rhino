import { IEmailServerService } from './IEmailServerService';
import { EmailServerDto } from '../../model/dto/EmailServerDto';
import { CrudService } from '../CrudService';

export class EmailServerService extends CrudService<EmailServerDto> implements IEmailServerService {
    constructor() {
        super('email-servers');
    }
}