import { USER_ACTION } from '../constants';

const homeReducer = (state = [], action) => {

    switch (action.type) {

        case USER_ACTION.ADD:
            return [...state, action.item];

        case USER_ACTION.ADD_ALL:
            return [...state, action.items];

        default:
            return state;
    }
}

export default homeReducer;