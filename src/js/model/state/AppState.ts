import { MenuState } from './MenuState';
import { UserAddState, UserEditState, UserPageState } from './UserState';
import ClientState from '../stateZ/client/ClientState';
import CampaignState from '../stateZ/campaign/CampaignState';
import EmailServerState from '../state2/emailServer/EmailServerState';
import PhishingDomainState from '../stateZ/phishingDomain/PhishingDomainState';
import LandingPageState from '../stateZ/landingPage/LandingPageState';
import ScheduleState from '../stateZ/schedule/ScheduleState';
import { LoginState } from './LoginState';
import { ProfileState } from './ProfileState';
import { ListState } from './page/ListState';
import EngagementState from '../stateZ/engagement/EngagementState';
import RedirectPageState from '../stateZ/redirectPage/RedirectPageState';
import EmailTemplateState from '../stateZ/emailTemplate/EmailTemplateState';
import Schedule from '../state2/schedule/ScheduleState';
import ScraperUserAgentState from '../stateZ/scraperUserAgent/ScraperUserAgentState';
import ShoalScrapeCredState from '../stateZ/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeTaskState from '../stateZ/shoalScrapeTask/ShoalScrapeTaskState';
import OAuthConsumerState from '../stateZ/oAuthConsumer/OAuthConsumerState';
import OAuthEngagementState from '../stateZ/oAuthEngagement/OAuthEngagementState';
import OAuthResultState from '../stateZ/oAuthResult/OAuthResultState';
import PlunderState from '../stateZ/plunder/PlunderState'

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
    login: LoginState
    profile: ProfileState
    scraperUserAgent: ScraperUserAgentState
    shoalScrapeCred: ShoalScrapeCredState
    shoalScrapeTask: ShoalScrapeTaskState
    oAuthConsumer: OAuthConsumerState
    oAuthEngagement: OAuthEngagementState
    oAuthResult: OAuthResultState
    plunder: PlunderState
}
