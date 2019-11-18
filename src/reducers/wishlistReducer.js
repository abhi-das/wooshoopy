import { USER_ACTION } from '../constants';


const wishlistReducer = (state = [], action) => {

    switch (action.type) {

        case USER_ACTION.ADD_TO_WISH:
            return [...state, action.item];

        case USER_ACTION.ADD_ALL:
            return [...state, action.items];

        case USER_ACTION.REMOVE_FROM_WISH:

            const existingItem = state.filter((itm, i) => {
                return itm['id'].toString() === action['itemId'].toString()
            });
            const newItems = state.filter((itm, i) => {
                return itm['id'] !== existingItem[0]['id']
            });

            return Object.assign([], ...state, newItems);

        default:
            return state;
    }
}

export default wishlistReducer;