import { ScheduleDto } from '../../model/dto/ScheduleDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IScheduleService extends Service {
    create(dto: ScheduleDto): Promise<ScheduleDto>;
    read(): Promise<PagedDto<ScheduleDto>>;
    readSingle(id: number): Promise<ScheduleDto>;
    update(dto: ScheduleDto): Promise<ScheduleDto>;
    delete(id: number): Promise<void>;
}