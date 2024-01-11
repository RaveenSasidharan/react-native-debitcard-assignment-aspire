import * as types from "../types";
export const setSpendingLimit = (spendingLimit) => ({
  type: types.SET_CARD_LIMIT,
  payload: spendingLimit,
});
