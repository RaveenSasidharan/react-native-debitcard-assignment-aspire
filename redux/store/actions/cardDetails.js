import * as types from "../types";

export function getCardDetails(debitCard) {
    return {
        type: types.GET_DEBIT_CARD_DETAILS_REQ_START,
        payload: debitCard,
    }
}
