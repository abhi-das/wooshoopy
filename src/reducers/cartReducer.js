import { USER_ACTION } from '../constants';


const cartReducer = (state = [], action) => {

    switch (action.type) {

        case USER_ACTION.ADD:
            return [...state, ...action.item];

        case USER_ACTION.ADD_ALL:
            return [...state, ...action.items];

        case USER_ACTION.REMOVE:

            const existingItem = state.filter((itm, i) => {
                return itm['id'] === state['id']
            });

            const newItems = state.filter((itm, i) => {
                return itm['id'] !== existingItem['id']
            });

            return Object.assign([], ...state, newItems);

        default:
            return state;
    }
}

export default cartReducer;