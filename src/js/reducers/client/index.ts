import { combineReducers } from 'redux'
import root from './ClientRoot'
import add from './ClientAdd'
import edit from './ClientEdit'

const user = combineReducers<any>({
    add: add,
    edit: edit,
    root: root
});

export default user;