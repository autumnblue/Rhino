import { combineReducers } from 'redux'
import * as navigation from './navigation/Navigation'
import user from './user'
import client from './client'
import * as login from './identity/Login'
import * as profile from './identity/Profile'
import { AppState } from '../model/state/AppState'

const app = combineReducers<AppState>({
    navigation: navigation.reducer,    
    user: user,
    client: client,
    login: login.reducer,
    profile: profile.reducer
});

export default app;