import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../types';

const API_URL = "https://98e755ab7ec740f99e0c256c11b1545d.api.mockbin.io/";

async function fetchCardDetailsFromAPI() {
    try {
        const resp = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await resp.json();
    } catch (err) {
        throw err;
    }
}

function* fetchCardDetails() {
    try {
        const details = yield call(fetchCardDetailsFromAPI);
        yield put({ type: types.GET_DEBIT_CARD_DETAILS_SUCCESS, payload: details})
    } catch(e) {
        yield put({ type: types.GET_DEBIT_CARD_DETAILS_FAILURE, payload: e.message})
    }
}


export default function* cardDetailsSaga() {
    yield takeLatest(types.GET_DEBIT_CARD_DETAILS_REQ_START, fetchCardDetails);
}