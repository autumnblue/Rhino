import { AddActionCreator } from '../crud/AddActionCreator'
import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IScheduleService } from '../../service/schedule/IScheduleService';
import { ServiceType } from '../../service/ServiceFactory';
import { AddState, Form } from '../../model/state/ScheduleState';
import { ScheduleDto } from '../../model/dto/ScheduleDto';
import { ScheduleFormValidation } from '../../validation/client/schedule/ScheduleFormValidation';

class ActionCreator extends AddActionCreator<IScheduleService> {
    constructor() {
        super(ServiceType.SCHEDULE);
    }

    public changeNameInput(dispatch, value: string) {
        dispatch({
            type: ActionType.SCHEDULE_CHANGE_NAME_INPUT,
            payload: value
        });
    }

    public changeBatchSizeInput(dispatch, value: string) {
        dispatch({
            type: ActionType.SCHEDULE_CHANGE_BATCH_SIZE_INPUT,
            payload: value
        });
    }

    public changeBatchIntervalInput(dispatch, value: string) {
        dispatch({
            type: ActionType.SCHEDULE_CHANGE_BATCH_INTERVAL_INPUT,
            payload: value
        });
    }

    public changeSleepTimeInput(dispatch, value: string) {
        dispatch({
            type: ActionType.SCHEDULE_CHANGE_SLEEP_TIME_INPUT,
            payload: value
        });
    }

    protected inputToDto(input: Form): ScheduleDto {
        return {
            name: input.name.value,
            batch_size: input.batchSize.value,
            batch_interval: input.batchInterval.value,
            time_between_batches: input.sleepTime.value,
            start_at: '',
            start_type: '',
            commit: true
        }
    }

    protected localValidate(state: AddState): AddState {
        return ScheduleFormValidation.validate(state);
    }
}

export const ScheduleAddAction: ActionCreator = new ActionCreator();