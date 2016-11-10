import { MenuState } from './MenuState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import ClientState from './ClientState';
import CampaignState from '../state2/campaign/CampaignState';
import EmailServerState from '../state2/emailServer/EmailServerState';
import PhishingDomainState from './PhishingDomainState';
import LandingPagesState from '../state2/landingPage/LandingPageState';
import ScheduleState from '../state2/schedule/ScheduleState';
import { LoginState } from './LoginState';
import { ProfileState } from './ProfileState';
import { ListState } from './page/ListState';
import EngagementState from '../state2/engagement/EngagementState';
import RedirectPagesState from '../state2/redirectPage/RedirectPageState';
import EmailTemplateState from '../state2/emailTemplate/EmailTemplateState';
import Schedule from '../state2/schedule/ScheduleState';

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
    campaign: CampaignState
    // schedule: {
    //     add: ScheduleState;
    //     root: ListState<ScheduleState>
    // }
    emailServer: EmailServerState
    phishingDomain: {
        add: PhishingDomainState
        edit: PhishingDomainState
        root: ListState<PhishingDomainState>
    }
    landingPages: LandingPagesState
    redirectPages: RedirectPagesState
    emailTemplate: EmailTemplateState
    schedule: ScheduleState
    login: LoginState;
    profile: ProfileState;
}
