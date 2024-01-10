import * as types from '../types';


const initialState = {
    spendingLimit: 5000,
  };
  
  const spendingLimitReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.SET_CARD_LIMIT:
        return {
          ...state,
          spendingLimit: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default spendingLimitReducer;
  