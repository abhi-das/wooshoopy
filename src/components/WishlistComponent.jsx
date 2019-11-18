import React from 'react';

const WishlistComponent = ({ items, removeFromWish }) => {
    // console.log(removeFromWish)
    const removeFromWishFn = (event) => {
        const { id } = event.target.dataset;
        removeFromWish(id);
    }
    return (
        <section id="wishlist-component" className="container">
            <div className="row pt-4">
                {items.length > 0 &&
                    items.map((itm, i) =>
                        <div className="col-3" key={itm.id * 2}>
                            <div className="card" >
                                <img className="card-img-top" src="./images/iwatch.jpg" alt="card_image" />
                                <div className="card-body">
                                    <h4 className="card-title">{itm.title}</h4>
                                    <p className="card-text">{itm.desc}</p>
                                    <button className="btn btn-primary btn-sm">
                                        +
                                    </button>
                                    <span className="badge badge-info ml-2" data-id={itm.id} onClick={removeFromWishFn}>Unlike</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    !items.length &&
                    <div className="col-3" >
                        <div className="card">
                            <h3 className="text-mute">Wishlist is empty</h3>
                        </div>
                    </div>
                }
            </div>
        </section>
    )

}

export default WishlistComponent;