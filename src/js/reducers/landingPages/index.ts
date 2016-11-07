import { combineReducers } from 'redux'
import add from './LandingPagesAdd';
import edit from './LandingPagesEdit';
import root from './LandingPagesRoot';

const landingPages = combineReducers<any>({
    edit: edit,
    add: add,
    root: root
});

export default landingPages;