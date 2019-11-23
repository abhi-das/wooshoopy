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

const removeFromCart = (itemId) => ({
    type: USER_ACTION.REMOVE_FROM_CART,
    itemId
});

const removeAllFromCart = () => ({
    type: USER_ACTION.REMOVE_ALL_FROM_CART
});



export { addToWish, addTo, addAllTo, removeFromCart, removeFromWish, removeAllFromCart }