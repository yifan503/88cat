import React from 'react'
import {useLocation} from "react-router-dom"

function About (){
    const location = useLocation();
    const {from, pathname} = location;
    console.log(location);

    return(
        <div>
            <h1>About</h1>
            <p>from {from}, and located at {pathname} </p>
        </div>
    );
}

export default About;