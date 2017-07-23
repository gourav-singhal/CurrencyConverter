import { combineReducers } from 'redux';

import main from './mainReducer';
import selector from './selectorReducer';

const rootReducer = combineReducers({
     main,
     selector,
});

/** export this module */
export default rootReducer;
