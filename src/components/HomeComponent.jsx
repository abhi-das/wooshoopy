import React from 'react';

const HomeComponent = ({ addToWish, addAllTo }) => {
    const sampleItems = [
        {
            id: 1,
            title: "Laboris Exercitation",
            desc: "Lorem cillum magna commodo qui aliqua incididunt duis duis Lorem eu nisi laborum.",
            isLiked: true,
            isAddedToCart: false
        }, {
            id: 2,
            title: "Reprehenderit laborum",
            desc: "Incididunt amet eu excepteur ad non minim aute non est quis velit velit occaecat non.",
            isLiked: true,
            isAddedToCart: false
        }, {
            id: 3,
            title: "Ipsum ut officia",
            desc: "Sunt anim deserunt fugiat do nostrud anim nulla consectetur.",
            isLiked: true,
            isAddedToCart: false
        }];
    const testFn = (event) => {
        const { id } = event.target.dataset;
        addToWish(sampleItems[id]);
    }
    const addInCart = (event) => {
        const { id } = event.target.dataset;
        addAllTo(sampleItems[id]);
    }
    return (
        <section id="home-component" className="container">
            <div className="row pt-4" >
                {
                    sampleItems.map((itm, i) =>
                        <div className="col-3" key={itm.id}>
                            <div className="card">
                                <img className="card-img-top" src="./images/iwatch.jpg" alt="card_image" />
                                <div className="card-body">
                                    <h4 className="card-title">{itm.title}</h4>
                                    <p className="card-text">{itm.desc}</p>
                                    <button className="btn btn-sm btn-success ml-2" data-id={i} onClick={testFn}>Like</button>
                                    <button className="btn btn-sm btn-info ml-2" data-id={i} onClick={addInCart}>AddToCart</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </section>
    )

}

export default HomeComponent;