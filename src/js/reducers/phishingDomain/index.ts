import { combineReducers } from 'redux'
import add from './PhishingDomainAdd';
import edit from './PhishingDomainEdit';
import root from './PhishingDomainRoot';

const phishingDomain = combineReducers<any>({
    add: add,
    edit: edit,
    root: root
});

export default phishingDomain;