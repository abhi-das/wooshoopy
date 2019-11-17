import { connect } from 'react-redux';

import CartComponent from '../components/CartComponent';
import { addTo, addAllTo, remove } from '../actions';

const mapStateToProp = ({ items }) => ({
    items
})

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
})

const Cart = connect(mapStateToProp, mapDispatchToProp)(CartComponent)

export default Cart;