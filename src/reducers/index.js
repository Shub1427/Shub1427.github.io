// This file will return me the whole set of reducers in one big combined object
// So that it works with redux...

import { combineReducers } from 'redux';
import user from './user';

export default combineReducers({
  userState: user,
});
