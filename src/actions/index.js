import { USER_ACTION } from '../constants';

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



export { addTo, addAllTo, remove }