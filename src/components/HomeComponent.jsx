import React from 'react';

const HomeComponent = () => {
    return (
        <section id="home-component" className="container">
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
                <div className="col-3">
                    <div className="card">
                        <img className="card-img-top" src="./images/iwatch.jpg" alt="card_image" />
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Officia cillum irure cillum eiusmod elit duis officia aliquip est adipisicing.</p>
                            <button className="btn btn-primary btn-sm">
                                +
                            </button>
                            <span className="badge badge-warning ml-2">Link</span>
                        </div>
                    </div>
                </div>
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

export default HomeComponent;