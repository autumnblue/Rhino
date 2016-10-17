import { combineReducers } from 'redux'
import * as navigation from './Navigation'
import * as client from './Client'
import * as campaign from './Campaign'
import * as user from './User'
import * as login from './Login'
import * as profile from './identity/Profile'
import { AppState } from '../model/state/AppState'

const app = combineReducers<AppState>({
    navigation: navigation.reducer,    
    clients: client.reducer,
    campaigns: campaign.reducer,
    user: user.reducers,
    login: login.reducer,
    profile: profile.reducer
});

export default app;