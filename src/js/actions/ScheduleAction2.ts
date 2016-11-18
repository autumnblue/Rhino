import ActionCreator from './ActionCreator';
import ScheduleService from '../service/ScheduleService';
import ScheduleMapper from '../mappers/ScheduleMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class ScheduleAction extends ActionCreator<ScheduleService> {
    private static QUALIFIER = 'schedule';

    constructor() {
        super(ScheduleService, ScheduleMapper, ScheduleAction.QUALIFIER)
    }
}

export default new ScheduleAction();