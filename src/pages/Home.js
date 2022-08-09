import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from '../components/Carousel'
import PopularProducts from '../components/PopularProducts'

function Home (){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <Carousel />
                </div>
            </div>
            <div className="row mt-2">
                <div className="offset-md-1">
                    <h1 className="display-3">
                        Discover popular products
                    </h1>
                </div>
            </div>
            <PopularProducts />
        </div>
    );
}

export default Home;