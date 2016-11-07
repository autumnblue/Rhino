import { combineReducers } from 'redux'
import add from './ScheduleAdd';
import root from './ScheduleRoot';

const phishingDomain = combineReducers<any>({
    add: add,
    root: root
});

export default phishingDomain;