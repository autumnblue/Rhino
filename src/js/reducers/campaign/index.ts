import { combineReducers } from 'redux'
import { CampaignState } from '../../model/state/CampaignState'
import * as root from './CampaignRoot';

const campaign = combineReducers<CampaignState>({
    root: root.reducer
});

export default campaign;