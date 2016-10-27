//require('dotenv').config();
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
import { ClientPage } from './views/containers/client/ClientPage';
import { ProfilePage } from './views/containers/identity/ProfilePage';
import { CampaignPage } from './views/containers/campaign/CampaignPage';
import { EmailServerPage } from './views/containers/emailServer/EmailServerPage';
import { PhishingDomainPage } from './views/containers/phishingDomain/PhishingDomainPage';
import { Dir } from './common/Constants';  
import { permit } from './security/RenderRules';
import { Role } from './security/Role';
import { Identity } from './security/Identity';

permit(Role.AUTHENTICATED);

//visually identify the current Sandbar server
Identity.Server.describe();

//initialState: AppState as second arg for hydration; default state handeled by each reducer
const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route 
                path={"/"} 
                component={App}>
                <Route path={ Dir.LOGIN } component={LoginPage} />
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
                    path={ Dir.PROFILE } 
                    component={ProfilePage}
                    onEnter={ () => permit(Role.AUTHENTICATED) } 
                    />
            </Route>
        </Router>
    </Provider>, document.getElementById('mount')
)



