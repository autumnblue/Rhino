import { MenuState } from './MenuState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import * as client from './ClientState';
import { CampaignPageState } from './CampaignState';
import { 
    EmailServerAddState, 
    EmailServerPageState } from './EmailServerState';
import * as phishingDomainState from './PhishingDomainState';
import * as scheduleState from './ScheduleState';
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
        add: client.AddState;
        edit: client.EditState;
        root: client.PageState;
    };
    campaign: {
        root: CampaignPageState;
    };
    schedule: {
        add: scheduleState.AddState;
        root: scheduleState.PageState;
    }
    emailServer: {
        add: EmailServerAddState;
        root: EmailServerPageState;
    };
    phishingDomain: {
        add: phishingDomainState.AddState;
        edit: phishingDomainState.EditState;
        root: phishingDomainState.PageState;
    };
    login: LoginState;
    profile: ProfileState;
}
