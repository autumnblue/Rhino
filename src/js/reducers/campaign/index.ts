import { combineReducers } from 'redux'
import CampaignState from '../../model/state/CampaignState'
import rootReducer from './CampaignRoot';

const campaign = combineReducers<CampaignState>({
    root: rootReducer
});

export default campaign;