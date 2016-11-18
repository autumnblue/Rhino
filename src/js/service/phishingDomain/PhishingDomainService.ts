import { IPhishingDomainService } from './IPhishingDomainService';
import { PhishingDomainDto } from '../../model/dto/PhishingDomainDto';
import { CrudService } from '../CrudService';

export class PhishingDomainService extends CrudService<PhishingDomainDto> implements IPhishingDomainService {
    constructor() {
        super('phishing-domains');
    }
}