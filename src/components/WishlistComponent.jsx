import React from 'react';

const WishlistComponent = () => {
    return (
        <section id="wishlist-component" className="container">
            <div className="row pt-4">
                <div className="col-3">
                    <div className="card">
                        <img className="card-img-top" src="./images/iwatch.jpg" alt="card_image" />
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Nisi occaecat eu incididunt magna amet velit culpa irure.</p>
                            <button className="btn btn-primary btn-sm">
                                +
                            </button>
                            <span className="badge badge-info ml-2">Link</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default WishlistComponent;