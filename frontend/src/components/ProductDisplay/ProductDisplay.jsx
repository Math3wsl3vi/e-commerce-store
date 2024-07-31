import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull_icon from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'
import { ShopContext } from '../../context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-image">
            <img className='productdisplay-main-img' src={product.image} alt="" /></div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-prices">
                <div className="productdisplay-right-oldprice">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-newprice">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                A Lightweight knitted pullover shirt kniited to be worn every single day. I'm adding this because i have nothing to write about this clothin.
            </div>
            <div className="productdisplay-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-category">
                <span>Category:</span> Women , T-shirt , Crop top
            </p>
            <p className="productdisplay-category">
                <span>Tags:</span> Modern , latest
            </p>
            
        </div>

    </div>
  )
}
