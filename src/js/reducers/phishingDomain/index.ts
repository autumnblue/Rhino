import { combineReducers } from 'redux'
import * as root from './PhishingDomainRoot';

const phishingDomain = combineReducers<any>({
    root: root.reducer
});

export default phishingDomain;