import { USER_ACTION } from '../constants';


const cartReducer = (state = [], action) => {

    switch (action.type) {

        case USER_ACTION.ADD:
            return [...state, action.item];

        case USER_ACTION.ADD_ALL:
            return [...state, action.items];

        case USER_ACTION.REMOVE_FROM_CART:

            // console.log(action)
            const existingItem = state.filter((itm, i) => {
                return itm['id'].toString() === action['itemId'].toString()
            });

            const newItems = state.filter((itm, i) => {
                return itm['id'] !== existingItem[0]['id']
            });

            return Object.assign([], ...state, newItems);

        case USER_ACTION.REMOVE_ALL_FROM_CART:

            return Object.assign([], ...state, []);

        default:
            return state;
    }
}

export default cartReducer;