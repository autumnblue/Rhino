import { combineReducers } from 'redux'
import * as root from './ClientRoot'
import * as add from './ClientAdd'
// import * as edit from './UserEdit'
import { ClientState } from '../../model/state/ClientState'

const user = combineReducers<ClientState>({
    add: add.reducer,
    // edit: edit.reducer,
    root: root.reducer
});

export default user;