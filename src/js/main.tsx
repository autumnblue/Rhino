//declare const CKEDITOR: any;
//CKEDITOR.basePath="assets/vendors/ckeditor/"

const injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import * as React from 'react'
import * as ReactDom from 'react-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { App } from './views/App';
import { Router, Route, browserHistory } from 'react-router';
import { LoginPage } from './views/containers/identity/LoginPage';
import { UserPage } from './views/containers/user/UserPage';
import ClientRoot from './views/client/ClientRoot';;
import EngagementRoot from './views/engagement/EngagementRoot';
import EmailTemplateRoot from './views/emailTemplate/EmailTemplateRoot';
import { ProfilePage } from './views/containers/identity/ProfilePage';
import CampaignRoot from './views/campaign/CampaignRoot'; 
import ScheduleRoot from './views/schedule/ScheduleRoot';
import EmailServerPage from './views/containers/emailServer/EmailServerPage';
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
import { Dir } from './common/Constants';  
import { permit } from './security/RenderRules';
import { Role } from './security/Role';
import { Identity } from './security/Identity';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme').default;
import getMuiTheme from 'material-ui/styles/getMuiTheme';

darkBaseTheme.fontFamily = 'rajdhani';

permit(Role.AUTHENTICATED);

//visually identify the current Sandbar server
Identity.Server.describe();
Identity.heartBeat();

//initialState: AppState as second arg for hydration; default state handeled by each reducer
const store = createStore(reducers);

ReactDom.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route 
                path={"/"} 
                component={App}>
                <Route path={ Dir.LOGIN } component={LoginPage} />
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
                    component={UserPage}
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
                    component={EmailServerPage}
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
                    component={ProfilePage}
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
            </Route>
        </Router>
    </Provider>
    </MuiThemeProvider>, document.getElementById('mount')
)



