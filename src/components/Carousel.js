import React from 'react'
import {Link} from 'react-router-dom'

function Carousel (){
    return(
        <div id="indicator" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#indicator" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#indicator" data-bs-slide-to="1"></li>
                <li data-bs-target="#indicator" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k" className="d-block w-100" alt=".." />
                </div>
                <div className="carousel-item">
                    <img src="https://i.picsum.photos/id/1074/5472/3648.jpg?hmac=w-Fbv9bl0KpEUgZugbsiGk3Y2-LGAuiLZOYsRk0zo4A" className="d-block w-100" alt=".." />
                </div>
                <div className="carousel-item">
                    <img src="https://i.picsum.photos/id/1084/4579/3271.jpg?hmac=YblMazviSugJVfZsFPaFI_Vp6lBeQin62qpm8rxHruo" className="d-block w-100" alt=".." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#indicator" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#indicator" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
}

export default Carousel;