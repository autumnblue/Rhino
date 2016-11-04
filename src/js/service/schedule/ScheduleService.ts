import { IScheduleService } from './IScheduleService';
import { ScheduleDto } from '../../model/dto/ScheduleDto';
import { CrudService } from '../CrudService';

export class ScheduleService extends CrudService<ScheduleDto> implements IScheduleService {
    constructor() {
        super('schedule-intervals');
    }
}