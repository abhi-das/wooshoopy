import { takeEvery } from 'redux-saga/effects';

import { addTo } from '../actions';

function* cartWorker() {
    console.log('cart worker');
}

const cartWatcher = function* cartWatcher() {
    yield takeEvery(addTo, cartWorker);
}

export { cartWatcher };