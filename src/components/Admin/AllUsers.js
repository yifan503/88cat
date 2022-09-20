import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {API} from '../API'

function AllUsers(){
    
    const [UserList,setUserList] = useState([]);

    useEffect(()=>{
        //发送请求读取用户信息
        axios.get(API+'/getUsers').then((res)=>{
            setUserList(res.data);
        })
    },[]);


    return(
        <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#showUsersModal">All Users</button>

            {/* 模态框 */}
            <div className="modal fade" id="showUsersModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="showUsersModalLabel">All Users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <span>Id</span><span className="ms-2">Email</span>
                            {
                                UserList.map( user =>
                                <div>
                                    {user[0]}
                                    <span className="ms-2">{user[1]}</span>
                                </div>
                                )
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default AllUsers;