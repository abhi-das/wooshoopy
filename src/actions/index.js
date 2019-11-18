import { USER_ACTION } from '../constants';

const addToWish = (item) => ({
    type: USER_ACTION.ADD_TO_WISH,
    item
});

const removeFromWish = (itemId) => ({
    type: USER_ACTION.REMOVE_FROM_WISH,
    itemId
});

const addTo = (item) => ({
    type: USER_ACTION.ADD,
    item
});

const addAllTo = (items) => ({
    type: USER_ACTION.ADD_ALL,
    items
});

const remove = (itemId) => ({
    type: USER_ACTION.REMOVE,
    itemId
});



export { addToWish, addTo, addAllTo, remove, removeFromWish }