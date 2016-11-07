import { combineReducers } from 'redux'
import add from './EmailServerAdd';
import root from './EmailServerRoot';

const emailServer = combineReducers<any>({
    add: add,
    root: root
});

export default emailServer;