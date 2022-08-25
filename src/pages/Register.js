import React from 'react'
import axios from 'axios';
import {API} from '../components/API'
import {useNavigate} from 'react-router-dom'

class Register extends React.Component{
    
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
            axios.post(API+'/register',data).then((res)=>{
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
                        <h1 className="title-text">Register</h1>
                    </div>
                    <div className="form-floating mb-4 row main-text">
                        <input 
                        name="username" 
                        type="email" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        />
                        <label htmlFor="floatingInput">Email Address</label>

                    </div>
                    <div className="form-floating mb-4 row main-text">
                        <input 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="text-center main-text">
                        <button type="submit" className="btn btn-add-to-cart col-6">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

function RegisterWithNavigate(props){
    let navigate = useNavigate();
    return <Register {...props} navigate={navigate}/>
}

export default RegisterWithNavigate;
