import { ClientState } from './ClientState';
import { UserState } from './UserState';
import { LoginState } from './LoginState';

export interface AppState {
    clients: Array<ClientState>;
    user: UserState;
    login: LoginState;
}
