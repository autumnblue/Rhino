import { combineReducers } from 'redux'
import * as add from './PhishingDomainAdd';
import * as edit from './PhishingDomainEdit';
import * as root from './PhishingDomainRoot';

const phishingDomain = combineReducers<any>({
    add: add.reducer,
    edit: edit.reducer,
    root: root.reducer
});

export default phishingDomain;