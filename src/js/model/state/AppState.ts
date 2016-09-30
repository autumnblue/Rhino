import { ClientState } from './ClientState';
import { UserState } from './UserState';

export interface AppState {
    clients: Array<ClientState>;
    user: UserState;
}
