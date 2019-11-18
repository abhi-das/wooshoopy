import React from 'react';

const CartComponent = ({ items }) => {
    return (
        <section id="cart-component" className="container">
            <div className="row pt-4">
                <div className="col-3">
                    <div className="card">
                        <img className="card-img-top" src="./images/iwatch.jpg" alt="card_image" />
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Nulla veniam eiusmod reprehenderit occaecat enim duis ut proident aliqua qui laboris aute veniam quis.</p>
                            <button className="btn btn-primary btn-sm">
                                +
                            </button>
                            <span className="badge badge-success ml-2">Link</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CartComponent;