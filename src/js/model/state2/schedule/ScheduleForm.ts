class ScheduleForm{
    id = null
    name = ''   
    batchSize: number = null
    // emailSendInterval: ValidatableInput
    batchInterval: number = null
    startType: 'now' | 'after_time'
    startAt = ''
    timeBetweenBatches: number = null
}

export default ScheduleForm;