import { combineReducers } from '@reduxjs/toolkit';

import storageStore from './storage';

const rootReducer = combineReducers({
  storageStore,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
