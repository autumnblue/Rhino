import * as React from 'react'
import * as ReactDom from 'react-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { App } from './components/App';
import { AppState } from './model/state/AppState';
import { ValidatableInput } from './common/validation/ValidatableInput';

const initialState: AppState = {
    clients: null,
    user: {},
    login: {
        input: {
            host: new ValidatableInput(),
            port: new ValidatableInput(),
            username: new ValidatableInput(),
            password: new ValidatableInput()
        }
    }
}
const store = createStore(reducers, initialState);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('mount')
)



