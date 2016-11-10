import CrudState from './CrudState';

class ScheduleState extends CrudState {
    id = null
    name = ''   
    batchSize: number = null
    // emailSendInterval: ValidatableInput
    batchInterval: number = null
    start_type: 'now' | 'after_time' 
    start_at = ''
    timeBetweenBatches: number = null
}

export default ScheduleState;