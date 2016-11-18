import ScheduleState from '../model/state2/schedule/ScheduleState';
import ScheduleForm from '../model/state2/schedule/ScheduleForm';
import ScheduleXDto from '../model/dto2/schedule/ScheduleXDto';
import ScheduleDto from '../model/dto2/schedule/ScheduleDto';
import Dependee from '../model/state2/Dependee';

class ScheduleMapperStatic {
    public toState = (dto: ScheduleXDto): ScheduleState => {
        const state = new ScheduleState();

        state.forms = dto.schedule_intervals.map(schedule => {

        return {
            id: schedule.id,
            name: schedule.name  , 
            batchSize: schedule.batch_size,
            // emailSendInterval: ValidatableInput
            batchInterval: schedule.batch_interval,
            startType: schedule.start_type,
            startAt: schedule.start_at,
            timeBetweenBatches: schedule.time_between_batches
        }});

        state.dependencies = {
            
        }

        //state.mode = 'ROOT';

        return state;
    }
    
    public toDto(form: ScheduleForm): ScheduleDto {
        return {
            "start_type": form.startType,
            "start_at": form.startAt,
            "name": form.name,
            "batch_interval": form.batchInterval,
            "time_between_batches": form.timeBetweenBatches,
            "id": form.id,
            "batch_size": form.batchSize
        }
    }
}
const ScheduleMapper = new ScheduleMapperStatic();
export default ScheduleMapper;