import * as React from 'react'
import * as ReactDom from 'react-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { App } from './components/App';
import { Router, Route, browserHistory } from 'react-router';
import { LoginPage } from './components/identity/LoginPage';
import { UserPage } from './components/user/UserPage';
import { ProfilePage } from './views/containers/identity/ProfilePage';
import { Dir } from './common/Constants'; 
import { permit } from './security/RenderRules';

var GeoPattern = require('geopattern');
var pattern = GeoPattern.generate('Skiff', { color: '#333333', baseColor: '#333333' });

document.body.style.backgroundImage = pattern.toDataUrl();
document.body.style.backgroundColor = pattern.color;

console.log(pattern.color);

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
                    />
                <Route 
                    path={ Dir.PROFILE } 
                    component={ProfilePage} 
                    />
            </Route>
        </Router>
    </Provider>, document.getElementById('mount')
)



