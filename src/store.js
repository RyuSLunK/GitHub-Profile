import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';
import { persistStore, autoRehydrate } from 'redux-persist'

export const history = createHistory();

const initialState = {};
const enhancers = [autoRehydrate()];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

let store = createStore(rootReducer, initialState, composedEnhancers);

// persistStore(store).purge();
persistStore(store)
export default store;
