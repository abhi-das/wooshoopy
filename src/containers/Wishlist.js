import { connect } from 'react-redux';
import { getWishlistItems } from '../selectors';
import WishlistComponent from '../components/WishlistComponent';

import { removeFromWish } from '../actions';

const mapStateToProp = (state) => ({
    items: getWishlistItems(state)
});

const mapDispatchToProp = dispatch => ({
    removeFromWish: (id) => {
        dispatch(removeFromWish(id))
    }
});

const Wishlist = connect(mapStateToProp, mapDispatchToProp)(WishlistComponent)
export default Wishlist;