import { IScheduleService } from './IScheduleService';
import { CrudService } from '../CrudService';
import ScheduleDto from '../../model/dto2/schedule/ScheduleDto';
import ScheduleXDto from '../../model/dto2/schedule/ScheduleXDto';
import * as http from '../HttpUtil';

class ScheduleService extends CrudService<ScheduleDto> implements IScheduleService {
    constructor() {
        super('schedule-intervals');
    }

    public async read(): Promise<ScheduleXDto> {
        const url = 'https://sandbar-dev.rhino.lan/api/v1/schedule-intervals';
        return http.dynamicGetX<ScheduleXDto>(url);
    }
}

export default ScheduleService;