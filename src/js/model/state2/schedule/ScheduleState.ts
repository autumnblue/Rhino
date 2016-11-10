import ScheduleForm from './ScheduleForm';
import { ViewType } from '../../state/page/ViewType'; 

class ScheduleState {
    forms: Array<ScheduleForm>;

    mode = "ROOT" //TODO enum EDIT, ADD, ROOT
    view = ViewType.GRID

    dependencies: { }

    selected: number = null;

    //startSend: 'now' | 'after_amount' | 'specific_time'  
}

export default ScheduleState;