import * as React from 'react'
import * as ReactDom from 'react-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { App } from './components/App';

//initialState: AppState as second arg for hydration; default state handeled by each reducer
const store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('mount')
)



