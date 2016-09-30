import * as React from 'react'
import * as ReactDom from 'react-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { App } from './components/App';
import { AppState } from './model/state/AppState';

const initialState: AppState = {
    clients: null,
    user: {}
}
const store = createStore(reducer, initialState);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('mount')
)



