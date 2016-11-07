import { MenuState } from './MenuState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import ClientState from './ClientState';
import CampaignState from './CampaignState';
import EmailServerState from './EmailServerState';
import PhishingDomainState from './PhishingDomainState';
import LandingPagesState from './LandingPagesState';
import ScheduleState from './ScheduleState';
import { LoginState } from './LoginState';
import { ProfileState } from './ProfileState';
import { ListState } from './page/ListState';

export interface AppState {
    navigation: MenuState
    user: {
        add: UserAddState
        edit: UserEditState
        root: UserPageState;
    }
    client: {
        add: ClientState
        edit: ClientState
        root: ListState<ClientState>
    }
    campaign: {
        root: ListState<CampaignState>
    }
    schedule: {
        add: ScheduleState;
        root: ListState<ScheduleState>
    }
    emailServer: {
        add: EmailServerState
        root: ListState<EmailServerState>
    }
    phishingDomain: {
        add: PhishingDomainState
        edit: PhishingDomainState
        root: ListState<PhishingDomainState>
    }
    landingPages: {
        add: LandingPagesState
        edit: LandingPagesState
        root: ListState<LandingPagesState>
    }
    login: LoginState;
    profile: ProfileState;
}
