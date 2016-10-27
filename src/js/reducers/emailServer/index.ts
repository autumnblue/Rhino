import { combineReducers } from 'redux'
// import { CampaignState } from '../../model/state/CampaignState'
import * as root from './EmailServerRoot';

const emailServer = combineReducers<any>({
    root: root.reducer
});

export default emailServer;