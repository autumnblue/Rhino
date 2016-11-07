import CrudState from './CrudState';

class ScheduleState implements CrudState {
    id = null
    name = ''   
    batchSize = ''
    // emailSendInterval: ValidatableInput
    batchInterval = ''
    sleepTime = 0
    startSending = ''
    startSendingAt? = ''
}

export default ScheduleState;