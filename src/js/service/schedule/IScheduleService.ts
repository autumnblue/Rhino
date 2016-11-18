import { ScheduleDto } from '../../model/dto/ScheduleDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IScheduleService extends Service {
    create(dto: any): Promise<any>;
    read(): Promise<any>;
    readSingle(id: number): Promise<any>;
    update(dto: any): Promise<any>;
    delete(id: number): Promise<void>;
}