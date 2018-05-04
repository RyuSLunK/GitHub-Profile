import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import repos from './repos';
import gists from './gists';

export default combineReducers({
  router: routerReducer,
  user,
  repos,
  gists,
});
