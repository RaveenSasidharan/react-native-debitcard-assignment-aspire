import {all} from 'redux-saga/effects';
import cardDetailsSaga from './cardDetails';

export  function* rootSaga() {
    yield all([cardDetailsSaga()])
}