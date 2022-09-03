import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from '../components/Carousel'
import PopularProducts from '../components/PopularProducts'

function Home (){
    return(
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <Carousel />
                </div>
            </div>
            <div className="pt-md-5 pb-md-5"></div>
            <div className="pt-3 pb-3"></div>
            <div className="row mt-4 pt-2">
                <div className="offset-md-1">
                    <h2 className="title-text">
                        Discover popular products
                    </h2>
                </div>
            </div>
            <PopularProducts />
        </div>
    );
}

export default Home;