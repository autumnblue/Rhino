import { LandingPagesDto } from '../../model/dto/LandingPagesDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface ILandingPagesService extends Service {
    create(dto: LandingPagesDto): Promise<LandingPagesDto>;
    read(): Promise<PagedDto<LandingPagesDto>>;
    readSingle(id: number): Promise<LandingPagesDto>;
    update(dto: LandingPagesDto): Promise<LandingPagesDto>;
    delete(id: number): Promise<void>;
}