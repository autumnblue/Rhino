import * as React from 'react'
import * as ReactDom from 'react-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { App } from './components/App';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('mount')
)



