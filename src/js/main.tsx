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
import { ProfilePage } from './views/containers/identity/ProfilePage';
import { Dir } from './common/Constants'; 
import { permit } from './security/RenderRules';
import { Role } from './security/Role';
import { CurrentUser } from './CurrentUser';

const DEFAULT_SEED = 'Skiff';
const socket = CurrentUser.Session.getSocket(); 
const seed = socket ? `${socket.host}${socket.port}` : DEFAULT_SEED;
const GeoPattern = require('geopattern');
let pattern;
if(seed == DEFAULT_SEED)
    pattern = GeoPattern.generate('Skiff', { color: '#333333', baseColor: '#333333' });
else
    pattern = GeoPattern.generate(seed);

document.body.style.backgroundImage = pattern.toDataUrl();
document.body.style.backgroundColor = pattern.color;

//initialState: AppState as second arg for hydration; default state handeled by each reducer
const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path="/" component={App}>
                <Route path={ Dir.LOGIN } component={LoginPage} />
                <Route 
                    path={ Dir.USERS } 
                    component={UserPage}
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



