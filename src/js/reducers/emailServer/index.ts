import { combineReducers } from 'redux'
import * as add from './EmailServerAdd';
import * as root from './EmailServerRoot';

const emailServer = combineReducers<any>({
    add: add.reducer,
    root: root.reducer
});

export default emailServer;