import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHashHistory from 'history/createHashHistory';
import configureStore from './redux/createStore';
import App from './components/App';

const history = createHashHistory();
const store = configureStore();

console.clear();
let component = <App history={history} />;

if (process.env.NODE_ENV === 'development') {
    const DevTools = require('./containers/DevTools').default;
    component = (
        <div>
            {component}
            <DevTools />
        </div>
    );
}

render(
    <Provider store={store}>
        {component}
    </Provider>,
    document.getElementById('root')
);
