import { combineReducers } from 'redux'
import * as add from './LandingPagesAdd';
// import * as edit from './LandingPagesEdit';
import * as root from './LandingPagesRoot';

const landingPages = combineReducers<any>({
    add: add.reducer,
    root: root.reducer
});

export default landingPages;