import React from 'react';

const CartComponent = ({ items, removeFromCart, removeAllFromCart }) => {
    // console.log(removeFromCart)
    const removeFromCartFn = (event) => {
        const { id } = event.target.dataset;
        removeFromCart(id);
    }
    const removeAllFn = () => {
        removeAllFromCart();
    }
    return (
        <section id="cart-component" className="container">
            <div className="row pt-4">
                {items.length > 0 &&
                    items.map((itm, i) =>
                        <div className="col-3" key={itm.id * 2}>
                            <div className="card" >
                                <img className="card-img-top" src="./images/iwatch.jpg" alt="card_image" />
                                <div className="card-body">
                                    <h4 className="card-title">{itm.title}</h4>
                                    <p className="card-text">{itm.desc}</p>
                                    <button className="btn btn-primary btn-sm" data-id={itm.id} onClick={removeFromCartFn}>Remove
                                    </button>
                                    <button className="btn btn-primary btn-sm" onClick={removeAllFn}>Remove All
                            </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    !items.length &&
                    <div className="col-3" >
                        <div className="card">
                            <h3 className="text-mute">Cart is empty</h3>
                            <button className="btn btn-primary btn-sm" onClick={removeAllFn}>Remove All
                            </button>
                        </div>
                    </div>
                }
            </div>
        </section>
    )

}

export default CartComponent;