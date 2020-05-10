import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const ROOT_REDUCER_PATH = './root-reducer';

export const makeStore = (initialState?: {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  // HMR for Reducer state on dev
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(`${ROOT_REDUCER_PATH}`, async () => {
      const newRootReducer = (await import(`${ROOT_REDUCER_PATH}`)).default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export default makeStore;
export const staticStore = makeStore();
