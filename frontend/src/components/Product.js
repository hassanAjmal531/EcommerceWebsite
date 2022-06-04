import React, { Fragment } from 'react'
import logo from "../images/appLogo.png"
import ReactStars from "react-rating-stars-component";
import "./styles/product.css"

const Product = () => {
  return (<Fragment>
      <div className='productImage'>
        <img src= {logo}/>
        <h1 className='productname'>name</h1>
        <ReactStars 
        edit={false}
        value = "3"
        />
        <p>Rs. 5000</p>

        
          
      </div>
  </Fragment>
    
  )
}

export default Product