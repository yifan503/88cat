import React from 'react'
import {LoginUser} from '../components/Cookie'
import { Cookies, useCookies} from 'react-cookie'
import {useNavigate,Link} from 'react-router-dom'


function Profile (){
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['username']);

    const LogOut = ()=>{
        //删除user cookie
        navigate('/Login');
    }

    return (
        <div className="container">
            <h1>user profile page</h1>
            <p>{LoginUser()}</p>
            <button className="btn btn-danger" onClick={LogOut}>Log out</button>
        </div>
    );
}

export default Profile;