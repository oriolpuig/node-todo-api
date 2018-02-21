/* eslint-disable global-require */
import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';
import rootReducer from './reducers/root';
import promiseMiddleware from './middlewares/promiseMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';


export default function createStore(initialState) {
  const middleware = [promiseMiddleware, loggerMiddleware, thunk];
  const store = _createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/root', () => {
      const nextRootReducer = require('./reducers/root').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
