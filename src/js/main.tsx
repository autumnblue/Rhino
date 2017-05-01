//declare const CKEDITOR: any;
//CKEDITOR.basePath="assets/vendors/ckeditor/"

import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import * as React from 'react'
import { Provider } from 'react-redux'
import { App } from './views/App';
import { Router, Route, browserHistory } from 'react-router';
import UserRoot from './views/user/UserRoot';
import ClientRoot from './views/client/ClientRoot';
import EmailTemplateRoot from './views/emailTemplate/EmailTemplateRoot';
import ProfileRoot from './views/profile/ProfileRoot';
import CampaignRoot from './views/campaign/CampaignRoot'; 
import ScheduleRoot from './views/schedule/ScheduleRoot';
import EmailServerRoot from './views/emailServer/EmailServerRoot';
import PhishingDomainRoot from './views/phishingDomain/PhishingDomainRoot';
import ScraperUserAgentRoot from './views/scraperUserAgent/ScraperUserAgentRoot';
import ShoalScrapeCredRoot from './views/shoalScrapeCred/ShoalScrapeCredRoot';
import ShoalScrapeTaskRoot from './views/shoalScrapeTask/ShoalScrapeTaskRoot';
import LandingPageRoot from './views/landingPage/LandingPageRoot'; 
import RedirectPageRoot from './views/redirectPage/RedirectPageRoot';
import OAuthConsumerRoot from './views/oAuthConsumer/OAuthConsumerRoot';
import OAuthResultRoot from './views/oAuthResult/OAuthResultRoot';
import OAuthEngagementRoot from './views/oAuthEngagement/OAuthEngagementRoot';
import PlunderRoot from './views/plunder/PlunderRoot';
import TargetListRoot from './views/targetList/TargetListRoot';
import VectorEmailRoot from './views/vectorEmail/VectorEmailRoot';
import LoginRoot from './views/identity/LoginRoot';
import { Dir } from './common/Constants';
import { permit } from './security/RenderRules';
import { Role } from './security/Role';
import { Identity } from './security/Identity';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import EngagementRoot from './views/engagement/EngagementRoot';
import store from './store';

const MuiDarkBaseTheme = darkBaseTheme;
MuiDarkBaseTheme.fontFamily = 'rajdhani';

permit(Role.AUTHENTICATED);
//initialState: AppState as second arg for hydration; default state handeled by each reducer

//visually identify the current Sandbar server
Identity.Server.describe();
Identity.heartBeat();

export default class MainRoot extends React.Component<any, any> {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(MuiDarkBaseTheme)}>
                <Provider store={store}>
                    <Router history={ browserHistory }>
                        <Route
                            path={"/"}
                            component={App}>
                            <Route
                                path={ Dir.LOGIN }
                                component={LoginRoot}
                            />
                            <Route
                                path={ Dir.EMAIL_TEMPLATES }
                                component={EmailTemplateRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.ENGAGEMENTS }
                                component={EngagementRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.USERS }
                                component={UserRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.CLIENTS }
                                component={ClientRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.CAMPAIGN }
                                component={CampaignRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.SCHEDULE }
                                component={ScheduleRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.EMAIL_SERVER }
                                component={EmailServerRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.PHISHING_DOMAIN }
                                component={PhishingDomainRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.LANDING_PAGES }
                                component={LandingPageRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.REDIRECT_PAGES }
                                component={RedirectPageRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.PROFILE }
                                component={ProfileRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.SCRAPER_USER_AGENTS }
                                component={ScraperUserAgentRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.SHOAL_SCRAPE_TASKS }
                                component={ShoalScrapeTaskRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.SHOAL_SCRAPE_CREDS }
                                component={ShoalScrapeCredRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.O_AUTH_RESULTS }
                                component={OAuthResultRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.O_AUTH_ENGAGEMENTS }
                                component={OAuthEngagementRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.O_AUTH_CONSUMERS }
                                component={OAuthConsumerRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.PLUNDER }
                                component={PlunderRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.TARGET_LISTS }
                                component={TargetListRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                            <Route
                                path={ Dir.VECTOR_EMAIL }
                                component={VectorEmailRoot}
                                onEnter={ () => permit(Role.AUTHENTICATED) }
                            />
                        </Route>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}


