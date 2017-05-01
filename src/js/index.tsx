import * as React from 'react'
import * as ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import MainRoot from './main';

const rootEl = document.getElementById('mount');

const render = (MainRoot) => {
    ReactDom.render(
        <AppContainer>
            <MainRoot />
        </AppContainer>,
        rootEl
    )
};

render(MainRoot);

if ( module.hot ) {
    module.hot.accept('./main', () => {
        render(MainRoot);
    });
}
