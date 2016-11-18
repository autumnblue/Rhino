import reduce from '../common';
import ScheduleState from '../../model/stateZ/schedule/ScheduleState'
import ScheduleRecord from '../../model/stateZ/schedule/ScheduleRecord'

export default reduce(new ScheduleState(), new ScheduleRecord());