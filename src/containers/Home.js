import { connect } from 'react-redux';

import HomeComponent from '../components/HomeComponent';

import { addToWish, addAllTo } from '../actions';

const mapDispatchToProp = dispatch => ({
    addTo: (item) => {
        dispatch(addToWish(item))
    },
    addAllTo: (items) => {
        dispatch(addAllTo(items))
    }
})


const Home = connect(null, mapDispatchToProp)(HomeComponent)
export default Home;