import { combineReducers } from 'redux'
import * as add from './ScheduleAdd';
import * as root from './ScheduleRoot';

const phishingDomain = combineReducers<any>({
    add: add.reducer,
    root: root.reducer
});

export default phishingDomain;