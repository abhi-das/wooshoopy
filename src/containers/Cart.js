import { connect } from 'react-redux';

import CartComponent from '../components/CartComponent';
import { remove } from '../actions';

const mapStateToProp = ({ items }) => ({
    items
})

const mapDispatchToProp = dispatch => ({
    remove: (id) => {
        dispatch(remove(id))
    }
})

const Cart = connect(mapStateToProp, mapDispatchToProp)(CartComponent)

export default Cart;