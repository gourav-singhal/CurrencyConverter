import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

const logger = createLogger({
  predicate: (getState, action) => __DEV__
});

const createRNReduxStore = applyMiddleware(logger, ReduxThunk)(createStore);

const store = createRNReduxStore(rootReducer);

export default store;
