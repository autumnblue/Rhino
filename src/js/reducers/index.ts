import { combineReducers } from 'redux'
import * as client from './Client'
import * as campaign from './Campaign'
import { AppState } from '../model/state/AppState';

const app = combineReducers<AppState>({
    clients: client.reducer,
    campaigns: campaign.reducer
});

export default app;