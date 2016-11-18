import ScheduleState from '../../model/state/ScheduleState';
import reduce from '../crud/AddReducer';

const state = new ScheduleState(); 
const reducer = reduce<ScheduleState>(state, 'schedule'); 
export default reducer;

