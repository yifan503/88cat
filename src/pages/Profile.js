import React from 'react'
import {LoginUser} from '../components/Cookie'
import { Cookies, useCookies} from 'react-cookie'
import {useNavigate,Link} from 'react-router-dom'


function Profile (){
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    const LogOut = ()=>{
        //删除user cookie
        removeCookie('username',{path:'/'});
        navigate('/Login');
    }

    return (
        <div className="container">
            <h1>user profile page</h1>
            <p>{LoginUser()}</p>
            {
                LoginUser()=="admin@admin.com"?
                <Link className="row" to="/Admin_page_">admin page</Link>
                :
                <span></span>
            }
            
            <button className="btn btn-danger" onClick={LogOut}>Log out</button>
        </div>
    );
}

export default Profile;