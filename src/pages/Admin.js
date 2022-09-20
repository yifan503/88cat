import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {LoginUser} from '../components/Cookie'
import axios from 'axios'
import {API} from '../components/API'
import AllUsers from '../components/Admin/AllUsers'
import AllProducts from '../components/Admin/AllProducts'

function Admin(){
    let navigate = useNavigate();
    let currentUser = LoginUser();
    useEffect(()=>{
        //判断登陆用户是否为admin
        if(currentUser!=="admin@admin.com"){
            navigate('/');
        }

    },[]);

    return(
        <div className="container">
            <h1 className="title-text text-center">Admin</h1>
            <AllUsers />
            <AllProducts />
            <button>All Orders</button>
        </div>
    );
}

export default Admin;