import { connect } from 'react-redux';
import WishlistComponent from '../components/WishlistComponent';

import { removeFromWish } from '../actions';

const mapStateToProp = ({ wishlist }) => ({
    items: wishlist
});

const mapDispatchToProp = dispatch => ({
    removeFromWish: (id) => {
        dispatch(removeFromWish(id))
    }
});

const Wishlist = connect(mapStateToProp, mapDispatchToProp)(WishlistComponent)
export default Wishlist;