import { connect } from 'react-redux';

import CartComponent from '../components/CartComponent';
import { removeFromCart, removeAllFromCart } from '../actions';

const mapStateToProp = ({ cart }) => ({
    items: cart
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