import { connect } from 'react-redux';
import WishlistComponent from '../components/WishlistComponent';

import { addTo, addAllTo, remove } from '../actions';

const mapStateToProp = ({ items }) => ({
    items
});

const mapDispatchToProp = dispatch => ({
    addTo: (item) => {
        dispatch(addTo(item))
    },
    addAllTo: (items) => {
        dispatch(addAllTo(items))
    },
    remove: (id) => {
        dispatch(remove(id))
    }
});

const Wishlist = connect(mapStateToProp, mapDispatchToProp)(WishlistComponent)
export default Wishlist;