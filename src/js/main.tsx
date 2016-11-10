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
import ClientPage from './views/containers/client/ClientPage';
import EngagementRoot from './views/containers/engagement/EngagementRoot';
import EmailTemplateRoot from './views/containers/emailTemplate/EmailTemplateRoot';
import { ProfilePage } from './views/containers/identity/ProfilePage';
import CampaignPage from './views/containers/campaign/CampaignRoot';
import SchedulePage from './views/containers/schedule/SchedulePage';
import EmailServerPage from './views/containers/emailServer/EmailServerPage';
import PhishingDomainPage from './views/containers/phishingDomain/PhishingDomainPage';
import LandingPagesPage from './views/containers/landingPages/LandingPagesRoot'; 
import RedirectPagesPage from './views/containers/redirectPages/RedirectPagesRoot';
import { Dir } from './common/Constants';  
import { permit } from './security/RenderRules';
import { Role } from './security/Role';
import { Identity } from './security/Identity';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


permit(Role.AUTHENTICATED);

//visually identify the current Sandbar server
Identity.Server.describe();
Identity.heartBeat();

//initialState: AppState as second arg for hydration; default state handeled by each reducer
const store = createStore(reducers);

ReactDom.render(
    <MuiThemeProvider>
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
                    component={ClientPage}
                    onEnter={ () => permit(Role.AUTHENTICATED) } 
                    />
                <Route 
                    path={ Dir.CAMPAIGN } 
                    component={CampaignPage}
                    onEnter={ () => permit(Role.AUTHENTICATED) } 
                    />
                <Route 
                    path={ Dir.SCHEDULE } 
                    component={SchedulePage}
                    onEnter={ () => permit(Role.AUTHENTICATED) } 
                    />
                <Route 
                    path={ Dir.EMAIL_SERVER } 
                    component={EmailServerPage}
                    onEnter={ () => permit(Role.AUTHENTICATED) } 
                    />
                <Route 
                    path={ Dir.PHISHING_DOMAIN } 
                    component={PhishingDomainPage}
                    onEnter={ () => permit(Role.AUTHENTICATED) } 
                    />
                <Route 
                    path={ Dir.LANDING_PAGES } 
                    component={LandingPagesPage}
                    onEnter={ () => permit(Role.AUTHENTICATED) }
                    />
                <Route 
                    path={ Dir.REDIRECT_PAGES } 
                    component={RedirectPagesPage}
                    onEnter={ () => permit(Role.AUTHENTICATED) }
                    />
                <Route 
                    path={ Dir.PROFILE } 
                    component={ProfilePage}
                    onEnter={ () => permit(Role.AUTHENTICATED) } 
                    />
            </Route>
        </Router>
    </Provider>
    </MuiThemeProvider>, document.getElementById('mount')
)



