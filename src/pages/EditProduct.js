import React, {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {LoginUser} from '../components/Cookie'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import {API} from '../components/API'


function EditProduct (props){

    let navigate = useNavigate();
    let currentUser = LoginUser();
    useEffect(()=>{
        //判断登陆用户是否为admin
        if(currentUser!=="admin@admin.com"){
            navigate('/');
        }

    },[]);

    let imgList = [];
    for(let i = 1; i < 23; i++){
        imgList.push(i);
    }

    const [cookies, setCookie, removeCookie] = useCookies(['EditProductInfo']);
    const originalProductInfo = cookies.EditProductInfo;
    const [Size,setSize] = useState(originalProductInfo[1]);
    const [Color,setColor] = useState(originalProductInfo[2]);
    const [Flavour,setFlavour] = useState(originalProductInfo[3]);
    const [Price,setPrice] = useState(originalProductInfo[4]);
    const [Name,setName] = useState(originalProductInfo[5]);
    const [Description,setDescription] = useState(originalProductInfo[6]);
    const [Detail,setDetail] = useState(originalProductInfo[7]);
    const [Brand,setBrand] = useState(originalProductInfo[8]);
    const [Catagories,setCatagories] = useState(originalProductInfo[9]);
    const [Storage,setStorage] = useState(originalProductInfo[10]);
    const [Discount,setDiscount] = useState(originalProductInfo[12]);
    const [Img ,setImg] = useState("");


    const convertToString = (value) =>{
        if(!value || value=="null"){
            value = ""
        };
        return value;
    }

    const handleSizeChange = (e)=>{
        setSize(e.target.value);
    }
    const handleColorChange = (e)=>{
        setColor(e.target.value);
    }
    const handleFlavourChange = (e)=>{
        setFlavour(e.target.value);
    }

    const handlePriceChange = (e)=>{
        setPrice(e.target.value);
    }
    const handleNameChange = (e)=>{
        setName(e.target.value);
    }
    const handleDescriptionChange = (e)=>{
        setDescription(e.target.value);
    }
    const handleDetailChange = (e)=>{
        setDetail(e.target.value);
    }
    const handleBrandChange = (e)=>{
        setBrand(e.target.value);
    }
    const handleCatagoriesChange = (e)=>{
        setCatagories(e.target.value);
    }
    const handleStorageChange = (e)=>{
        setStorage(e.target.value);
    }
    const handleDiscountChange = (e)=>{
        setDiscount(e.target.value);
    }
    const handleImgChange = (e)=>{
        setImg(e.target.value);
    }

    const handleSubmit = (e)=>{
        let data = new FormData();
        //封装表单数据
        let onSale = 'false'
        if(Discount&&parseFloat(Discount)<1&&parseFloat(Discount)>0){
            onSale = 'true'
        }
        data.append('id',originalProductInfo[0]);
        data.append('size',Size);
        data.append('color',Color);
        data.append('flavour',Flavour);
        data.append('price',Price);
        data.append('name',Name);
        data.append('description',Description);
        data.append('detail',Detail);
        data.append('brand',Brand);
        data.append('catagories',Catagories);
        data.append('storage',Storage);
        data.append('onSale',onSale);
        data.append('discount',Discount);
        data.append('img',Img);
        //发送请求
        axios.post(API+'/updateProduct',data).then((res)=>{
            if(res.data == "success"){
                //删除cookie并跳转回admin界面
                removeCookie('EditProductInfo',{path:'/'});
                navigate('/Admin_page_');
            }
            else{
                alert("fail")
            }
        }).catch((err)=>{
            console.log(err)
        });
        e.preventDefault();
    }
    return(
        <div className="container">
            <h1 className="title-text">Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="row g-2">
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Name)}
                        onChange={handleNameChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Product Name</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Price)}
                        onChange={handlePriceChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Product Price</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Size)}
                        onChange={handleSizeChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Size</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Color)}
                        onChange={handleColorChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Color</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Flavour)}
                        onChange={handleFlavourChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Flavour</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <textarea 
                        type="text"
                        value={convertToString(Description)}
                        onChange={handleDescriptionChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Detail)}
                        onChange={handleDetailChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Detail</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <select 
                        value={convertToString(Brand)}
                        onChange={handleBrandChange}
                        className="form-control"
                        id="floatingSelect"
                        >
                            <option value="">no brand</option>
                            <option value="a">brand a</option>
                            <option value="b">brand b</option>
                            <option value="c">brand c</option>
                        </select>
                        <label htmlFor="floatingSelect">Brand</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <select 
                        value={convertToString(Catagories)}
                        onChange={handleCatagoriesChange}
                        className="form-control"
                        id="floatingSelect"
                        >
                            <option value="">no Catagory</option>
                            <option value="treat">Cat treats</option>
                            <option value="toy">Cat toys</option>
                            <option value="care">Cat care</option>
                        </select>
                        <label htmlFor="floatingSelect">Catagories</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Storage)}
                        onChange={handleStorageChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Storage</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <input 
                        type="text"
                        value={convertToString(Discount)}
                        onChange={handleDiscountChange}
                        className="form-control"
                        id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Discount</label>
                    </div>
                    <div className="form-floating main-text col-3">
                        <select 
                        value={convertToString(Img)}
                        onChange={handleImgChange}
                        className="form-control"
                        id="floatingSelect"
                        >
                            <option value="">no image</option>
                            {
                                imgList.map((img_index)=>
                                    <option value={img_index}>{img_index}</option>
                                )
                            }
                            
                        </select>
                        <label htmlFor="floatingSelect">Image</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">save changes</button>
            </form>
        </div>
    );
}

export default EditProduct;