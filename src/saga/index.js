import { all, fork } from 'redux-saga/effects';

import * as wishSagas from './wishSaga';
import * as cartSagas from './cartSaga';

// const rootSaga = function* rootSaga() {
//     yield all([
//         fork(wishWatcher),
//         fork(wishRemover),
//         fork(cartWatcher)
//     ])
// }

const rootSaga = function* rootSaga() {


    yield all([
        ...Object.values(wishSagas),
        ...Object.values(cartSagas)
    ].map(fork))
}


export default rootSaga;