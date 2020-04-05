import { connect } from 'react-redux';

import { getCart } from '../selectors';
import CartComponent from '../components/CartComponent';
import { removeFromCart, removeAllFromCart } from '../actions';

const mapStateToProp = (state) => ({
    items: getCart(state)
})

const mapDispatchToProp = dispatch => ({
    removeFromCart: (id) => {
        dispatch(removeFromCart(id))
    },
    removeAllFromCart: () => {
        dispatch(removeAllFromCart())
    }
})

const Cart = connect(mapStateToProp, mapDispatchToProp)(CartComponent)

export default Cart;