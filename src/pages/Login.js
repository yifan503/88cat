import axios from 'axios';
import React from 'react'
import {API} from '../components/API'
import {useNavigate,Link} from 'react-router-dom'
import {OnLogin} from '../components/Cookie'
import {useCookies} from 'react-cookie'

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {username:'',password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]:target.value});
    }
    handleSubmit(event){
        if(this.state.username.length > 1 && this.state.password.length > 1){
            let data = new FormData();
            data.append('username',this.state.username);
            data.append('password',this.state.password);
            axios.post(API+'/checkLogin',data).then((res)=>{
                if(res.data == "success"){
                    this.props.setCookie('username',this.state.username,{path:'/'});
                    this.props.navigate('/');
                }
                else{
                    alert("fail")
                }
            }).catch((err)=>{
               console.log(err) 
            });
        }

        event.preventDefault();
    }

    render(){
        return (
            <div className="container d-flex justify-content-center mt-5">
                <form className="col-md-4" onSubmit={this.handleSubmit}>
                    <div className="row mb-4 text-center">
                        <h1>Login</h1>
                    </div>
                    <div className="form-floating mb-4 row">
                        <input 
                        name="username" 
                        type="email" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email Address</label>

                    </div>
                    <div className="form-floating mb-4 row">
                        <input 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-primary col-6">Login</button>
                    {/* <input type="submit" value="Login" /> */}
                    </div>
                    <div className="text-center mt-3">
                        new user? <Link to="/Register">register</Link> now!
                    </div>
                </form>
            </div>
        );
    }
}

function LoginWithNavigate(props){
    let navigate = useNavigate();
    let [cookies, setCookie] = useCookies(['username']);
    return <Login {...props} navigate={navigate} setCookie={setCookie} />
}

export default LoginWithNavigate;