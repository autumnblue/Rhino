import { MenuState } from './MenuState';
import { ClientState } from './ClientState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import { ClientAddState, ClientPageState } from './ClientState';
import { LoginState } from './LoginState';
import { ProfileState } from './ProfileState';

export interface AppState {
    navigation: MenuState;
    user: {
        add: UserAddState;
        edit: UserEditState;
        root: UserPageState; 
    };
    client: {
        add: ClientAddState;
        root: ClientPageState;
    }
    login: LoginState;
    profile: ProfileState;
}
