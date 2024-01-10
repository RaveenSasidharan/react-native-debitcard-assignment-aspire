import { combineReducers } from 'redux';
import spendingLimitReducer from './spendingLimit';
import cardDetailsReducer from './cardDetails';

const rootReducer = combineReducers({
  spendingLimit: spendingLimitReducer,
  cardDetails:cardDetailsReducer
});

export default rootReducer;
