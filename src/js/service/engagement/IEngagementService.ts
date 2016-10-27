import { EngagementDto } from '../../model/dto/EngagementDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IEngagementService extends Service {
    create(dto: EngagementDto): Promise<EngagementDto>;
    read(): Promise<PagedDto<EngagementDto>>;
    readSingle(id: number): Promise<EngagementDto>;
    update(dto: EngagementDto): Promise<EngagementDto>;
    delete(id: number): Promise<void>;
}