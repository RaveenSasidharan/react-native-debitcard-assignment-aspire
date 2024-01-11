import * as types from "../types";

const initialState = {
  debitCard: null,
  loading: false,
  error: null,
};

const cardDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEBIT_CARD_DETAILS_REQ_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_DEBIT_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        debitCard: action.payload,
      };
    case types.GET_DEBIT_CARD_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cardDetailsReducer;
