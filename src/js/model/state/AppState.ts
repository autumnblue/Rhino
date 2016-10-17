import { MenuState } from './MenuState';
import { ClientState } from './ClientState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import { LoginState } from './LoginState';
import { ProfileState } from './ProfileState';

export interface AppState {
    navigation: MenuState;
    clients: Array<ClientState>;
    user: {
        add: UserAddState;
        edit: UserEditState;
        root: UserPageState; 
    };
    login: LoginState;
    profile: ProfileState;
}
