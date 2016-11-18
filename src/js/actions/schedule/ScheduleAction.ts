import CrudActionCreator from '../crud/CrudActionCreator'
import { IScheduleService } from '../../service/schedule/IScheduleService';
import { ServiceType } from '../../service/ServiceFactory';
import State from '../../model/state/ScheduleState';
import { ScheduleDto } from '../../model/dto/ScheduleDto';

class ActionCreator extends CrudActionCreator<IScheduleService> {
    constructor() {
        super(ServiceType.SCHEDULE);
    }

    protected mapToDto(obj: State): ScheduleDto {
        return {
            start_type: null,
            start_at: null,
            name: null,
            batch_interval: null,
            batch_size: null,
            time_between_batches: null
        }
    }
}

const ScheduleAction: ActionCreator = new ActionCreator();
export default ScheduleAction;