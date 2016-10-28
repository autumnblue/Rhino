import { CrudActionCreator } from '../crud/CrudActionCreator'
import { IScheduleService } from '../../service/schedule/IScheduleService';
import { ServiceType } from '../../service/ServiceFactory';

class ActionCreator extends CrudActionCreator<IScheduleService> {
    constructor() {
        super(ServiceType.SCHEDULE);
    }
}

export const ScheduleAction: ActionCreator = new ActionCreator();