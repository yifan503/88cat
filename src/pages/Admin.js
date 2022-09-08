import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {LoginUser} from '../components/Cookie'
import axios from 'axios'
import {API} from '../components/API'

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
        <div>
            Admin
        </div>
    );
}

export default Admin;