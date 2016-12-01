import { MenuState } from './MenuState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import ClientState from '../stateZ/client/ClientState';
import UserState from '../stateZ/user/UserState';
import CampaignState from '../stateZ/campaign/CampaignState';
import EmailServerState from '../stateZ/emailServer/EmailServerState';
import PhishingDomainState from '../stateZ/phishingDomain/PhishingDomainState';
import LandingPageState from '../stateZ/landingPage/LandingPageState';
import ScheduleState from '../stateZ/schedule/ScheduleState';
import ProfileState from '../stateZ/profile/ProfileState';
import { ListState } from './page/ListState';
import EngagementState from '../stateZ/engagement/EngagementState';
import TargetListState from '../stateZ/targetList/TargetListState';
import LoginState from '../stateZ/login/LoginState';
import RedirectPageState from '../stateZ/redirectPage/RedirectPageState';
import EmailTemplateState from '../stateZ/emailTemplate/EmailTemplateState';
import Schedule from '../state2/schedule/ScheduleState';
import ScraperUserAgentState from '../stateZ/scraperUserAgent/ScraperUserAgentState';
import ShoalScrapeCredState from '../stateZ/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeTaskState from '../stateZ/shoalScrapeTask/ShoalScrapeTaskState';
import OAuthConsumerState from '../stateZ/oAuthConsumer/OAuthConsumerState';
import OAuthEngagementState from '../stateZ/oAuthEngagement/OAuthEngagementState';
import OAuthResultState from '../stateZ/oAuthResult/OAuthResultState';
import PlunderState from '../stateZ/plunder/PlunderState';
import PreviewState from '../stateZ/preview/PreviewState';

export interface AppState {
    navigation: MenuState
    user: UserState
    engagement: EngagementState
    client: ClientState
    campaign: CampaignState
    emailServer: EmailServerState
    phishingDomain: PhishingDomainState
    landingPage: LandingPageState
    redirectPage: RedirectPageState
    emailTemplate: EmailTemplateState
    schedule: ScheduleState
    login: LoginState
    profile: ProfileState
    scraperUserAgent: ScraperUserAgentState
    shoalScrapeCred: ShoalScrapeCredState
    shoalScrapeTask: ShoalScrapeTaskState
    oAuthConsumer: OAuthConsumerState
    oAuthEngagement: OAuthEngagementState
    oAuthResult: OAuthResultState
    plunder: PlunderState
    preview: PreviewState
    targetList: TargetListState
}
