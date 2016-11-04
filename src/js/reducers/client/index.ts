import { combineReducers } from 'redux'
import * as root from './ClientRoot'
import * as add from './ClientAdd'
import * as edit from './ClientEdit'

const user = combineReducers<any>({
    add: add.reducer,
    edit: edit.reducer,
    root: root.reducer
});

export default user;