import { MenuState } from './MenuState';
import { ClientState } from './ClientState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import { ClientAddState, ClientPageState } from './ClientState';
import { CampaignPageState } from './CampaignState';
import { EmailServerPageState } from './EmailServerState';
import { PhishingDomainPageState } from './PhishingDomainState';
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
    };
    campaign: {
        root: CampaignPageState;
    };
    emailServer: {
        root: EmailServerPageState;
    };
    phishingDomain: {
        root: PhishingDomainPageState;
    };
    login: LoginState;
    profile: ProfileState;
}
