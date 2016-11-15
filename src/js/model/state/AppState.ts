import { MenuState } from './MenuState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import ClientState from '../stateZ/client/ClientState';
import CampaignState from '../stateZ/campaign/CampaignState';
import EmailServerState from '../state2/emailServer/EmailServerState';
import PhishingDomainState from '../stateZ/phishingDomain/PhishingDomainState';
import LandingPageState from '../stateZ/landingPage/LandingPageState';
import ScheduleState from '../state2/schedule/ScheduleState';
import { LoginState } from './LoginState';
import { ProfileState } from './ProfileState';
import { ListState } from './page/ListState';
import EngagementState from '../stateZ/engagement/EngagementState';
import RedirectPageState from '../stateZ/redirectPage/RedirectPageState';
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
    client: ClientState
    campaign: CampaignState
    emailServer: EmailServerState
    phishingDomain: PhishingDomainState
    landingPage: LandingPageState
    redirectPage: RedirectPageState
    emailTemplate: EmailTemplateState
    schedule: ScheduleState
    login: LoginState;
    profile: ProfileState;
}
