import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {API} from '../components/API'
import Product from '../components/Product'
import convertImage from '../components/ConvertImage'

function CatsTreats (){

    const [ProductList,setProductList] = useState([]);

    useEffect(()=>{
        // 发送请求读取产品信息
        let data = new FormData();
        data.append('catagory','treat')
        axios.post(API + '/getProductsByCatagory', data).then((res)=>{
            setProductList(res.data);
            console.log(res.data)
        })
    },[])

    return(
        <div className="container">
            <h1 className="title-text text-center">Cats'Treats</h1>
            <div className="row mt-5">
                {
                    ProductList.map(
                        product => 
                        <Product 
                        key = {product[0]}
                        id={product[0]} 
                        img={convertImage(product[13])} 
                        name={product[5]} 
                        price={product[4]}
                        storge={product[10]}  
                        /> 
                    )
                }
            </div>
        </div>
    );
}

export default CatsTreats;