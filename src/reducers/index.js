import { combineReducers } from 'redux';

import classReducer from './classReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    userInfo: userReducer, 
    classList: classReducer
});

export default rootReducer;