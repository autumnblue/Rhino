import { combineReducers } from 'redux'
import * as root from './UserRoot'
import * as edit from './UserEdit'
import * as add from './UserAdd'
import { UserState } from '../../model/state/UserState'

const user = combineReducers<UserState>({
    add: add.reducer,
    edit: edit.reducer,
    root: root.reducer
});

export default user;