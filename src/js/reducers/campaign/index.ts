import { combineReducers } from 'redux'
import CampaignState from '../../model/state/CampaignState'
import reduce from '../crud/RootReducer';
import { ListState } from '../../model/state/page/ListState';
import rootReduce from '../crud/RootReducer';
import editReduce from '../crud/EditReducer';
import addReduce from '../crud/AddReducer';

const QUALIFIER = 'campaign';

const root = rootReduce<ListState<CampaignState>>(null, new ListState<CampaignState>(QUALIFIER), QUALIFIER);
const add = addReduce<CampaignState>(new CampaignState(QUALIFIER), QUALIFIER);
const edit = editReduce<CampaignState>(new CampaignState(QUALIFIER), null, QUALIFIER); 

const campaign = combineReducers<CampaignState>({
    root: root,
    add: add,
    edit: edit
});

export default campaign;