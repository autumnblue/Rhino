import { combineReducers } from 'redux'
import * as navigation from './navigation/Navigation'
import user from './user'
import * as login from './identity/Login'
import * as profile from './identity/Profile'
import { AppState } from '../model/state/AppState'

const app = combineReducers<AppState>({
    navigation: navigation.reducer,    
    user: user,
    login: login.reducer,
    profile: profile.reducer
});

export default app;