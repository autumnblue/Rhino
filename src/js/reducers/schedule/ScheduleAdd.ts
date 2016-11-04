import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { AddState } from '../../model/state/ScheduleState';
import { EmailServerDto } from '../../model/dto/EmailServerDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import * as add from '../crud/AddReducer';

const defaultAddState = (): AddState => {
    return {
        input: {
                name: new ValidatableInput(),
                batchSize: new ValidatableInput(),
                batchInterval: new ValidatableInput(),
                sleepTime: new ValidatableInput(),
                startSending: new ValidatableInput()
            },
        visible: false,
        isValid: false
    }
}

export const reducer = add.reducer<AddState>(defaultAddState, (state, action) => {
    const newState = copy<AddState>(state);
    switch(action.type) {
        case ActionType.SCHEDULE_CHANGE_NAME_INPUT:
            newState.input.name.value = action.payload;
            return newState;

        case ActionType.SCHEDULE_CHANGE_BATCH_SIZE_INPUT:
            newState.input.batchSize.value = action.payload;
            return newState;

        case ActionType.SCHEDULE_CHANGE_BATCH_INTERVAL_INPUT:
            newState.input.batchInterval.value = action.payload;
            return newState;

        case ActionType.SCHEDULE_CHANGE_SLEEP_TIME_INPUT:
            newState.input.sleepTime.value = action.payload;
            return newState;

        case ActionType.SCHEDULE_CHANGE_START_SENDING_INPUT:
            newState.input.startSending.value = action.payload;
            return newState;

        default: return state;
    }
});

