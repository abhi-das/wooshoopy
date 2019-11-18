import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    cart: cartReducer,
    home: homeReducer
})

export default rootReducer;