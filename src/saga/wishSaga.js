import { takeEvery } from 'redux-saga/effects';
import { USER_ACTION } from '../constants';
import { addToWish, removeFromWish } from '../actions';

function* wishRemoverWorker(action) {
    if (action['type'] === USER_ACTION.REMOVE_FROM_WISH) {
        console.log('remover from wish worker inner', action)
    }
}

const wishRemover = function* wishRemover() {
    console.log('remover from wish worker outer')
    var cce = yield takeEvery(removeFromWish, wishRemoverWorker);
    return cce;
}

function* wishWorker(action) {
    if (action['type'] === USER_ACTION.ADD_TO_WISH) {
        console.log('add to wish worker inner', action);
    }
}

const wishWatcher = function* wishWatcher() {
    console.log('add to wish worker outer');
    var addw = yield takeEvery(addToWish, wishWorker);
    return addw;
}

export { wishWatcher, wishRemover };