import { MenuState } from './MenuState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import ClientState from './ClientState';
import CampaignState from './CampaignState';
import EmailServerState from './EmailServerState';
import PhishingDomainState from './PhishingDomainState';
import LandingPagesState from '../state2/landingPage/LandingPageState';
import ScheduleState from './ScheduleState';
import { LoginState } from './LoginState';
import { ProfileState } from './ProfileState';
import { ListState } from './page/ListState';
import EngagementState from '../state2/engagement/EngagementState';
import RedirectPagesState from '../state2/redirectPage/RedirectPageState';

export interface AppState {
    navigation: MenuState
    user: {
        add: UserAddState
        edit: UserEditState
        root: UserPageState;
    }
    engagement: EngagementState
    client: {
        add: ClientState
        edit: ClientState
        root: ListState<ClientState>
    }
    campaign: {
        add: CampaignState
        edit: CampaignState
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
    landingPages: LandingPagesState
    redirectPages: RedirectPagesState
    login: LoginState;
    profile: ProfileState;
}
