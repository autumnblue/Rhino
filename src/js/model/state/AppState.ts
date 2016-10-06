import { ClientState } from './ClientState';
import { UserAddState, UserEditState, UserListState } from './UserState';
import { LoginState } from './LoginState';

export interface AppState {
    clients: Array<ClientState>;
    user: {
        add: UserAddState;
        edit: UserEditState;
        list: UserListState; 
    };
    login: LoginState;
}
