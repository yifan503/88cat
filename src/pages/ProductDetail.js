import React from 'react'
import { useCookies } from 'react-cookie';

function ProductDetail(){
    const [cookies, setCookie] = useCookies(['currentProduct']);
    const product = cookies.currentProduct;
    // 传入同名产品列表


    return (
        <div className="container">
            {/* 产品图片 */}
            <img src={product.img} alt=".." />
            {/* 名称价格 */}
            <div>
                {product.name}
            </div>
            <div>
                {product.price}
            </div>
            <div>
                {/* size, flavour, color
                    根据选择跳转到对应的产品（修改cookie和当前产品
                */}
            </div>
            <div>
                - amount +
            </div>
            <div>
                add to cart
            </div>
        </div>
    )
}

export default ProductDetail;