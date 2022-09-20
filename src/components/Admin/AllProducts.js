import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {API} from '../API'
import { useCookies } from 'react-cookie';


function AllProducts(){
    
    const [ProductList,setProductList] = useState([]);
    const [cookies, setCookie] = useCookies(['EditProductInfo']);
    const navigate = useNavigate();

    useEffect(()=>{
        //发送请求读取用户信息
        axios.get(API+'/getProducts').then((res)=>{
            setProductList(res.data);
        })
    },[]);

    const deleteProduct = (id) => {
        let data = new FormData();
        data.append('productId',id);
        axios.post(API+'/deleteProduct',data).then((res)=>{
            if(res.data == "success"){
                axios.get(API+'/getProducts').then((res)=>{
                    setProductList(res.data);
                })
                console.log('success');
            }
        }).catch((err)=>{
            console.log(err);
        });
    };

    const editProduct = (productInfo)=>{
        //将产品信息写进cookie

        setCookie('EditProductInfo',productInfo,{path:'/'});
        console.log(cookies.EditProductInfo)
        //关闭模态框

        //跳转到编辑界面
        navigate('/EditProduct');
    }

    return(
        <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#showProductsModal">All Products</button>

            {/* 模态框 */}
            <div className="modal fade" id="showProductsModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="showProductsModalLabel">All Products</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <span>Id</span>
                            <span className="ms-2">Name</span>
                            <span className="ms-2">Price</span>
                            <span className="ms-2">Storage</span>
                            {
                                ProductList.map( product =>
                                <div>
                                    {product[0]}
                                    <span className="ms-2">{product[5]}</span>
                                    <span className="ms-2">{product[4]}</span>
                                    <span className="ms-2">{product[10]}</span>
                                    <button onClick={()=>{
                                        editProduct(product)
                                    }} className="btn btn-warning ms-2" data-bs-dismiss="modal">edit</button>
                                    <button onClick={()=>{
                                        deleteProduct(product[0])
                                    }} className="btn btn-danger ms-2" >delete</button>
                                </div>
                                )
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add product</button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default AllProducts;