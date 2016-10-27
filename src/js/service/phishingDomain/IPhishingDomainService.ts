import { PhishingDomainDto } from '../../model/dto/PhishingDomainDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IPhishingDomainService extends Service {
    create(dto: PhishingDomainDto): Promise<PhishingDomainDto>;
    read(): Promise<PagedDto<PhishingDomainDto>>;
    readSingle(id: number): Promise<PhishingDomainDto>;
    update(dto: PhishingDomainDto): Promise<PhishingDomainDto>;
    delete(id: number): Promise<void>;
}