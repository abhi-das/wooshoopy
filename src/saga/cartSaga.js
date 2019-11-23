import { take, call } from 'redux-saga/effects';

import { addTo, removeAllFromCart } from '../actions';

function* cartWorker(action) {

    console.log('cart worker');
    // try {

    // } finally {

    // }
}

function* cartAllWorker(action) {

    console.log('cartAllWorker worker');
}


const cartWatcher = function* cartWatcher() {
    yield take(addTo);
    yield call(cartWorker)
    yield take(removeAllFromCart);
    yield call(cartAllWorker);

    // yield fork(cartWorker)
}

export { cartWatcher };