import React from 'react'
import "../styles/footer.css"
import applogo from "../../images/appStore.png"
import playstoreimage from "../../images/playstoreImage.png"


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='left'>
            <h1>Download app</h1>
            <p>why wait? download our app for android and IOS devices</p>
            <img src={applogo}/>
            <img src={playstoreimage}/>

        </div>
        <div className='middle'>
            <h1>Ecommerce App</h1>
            <p> providing only the best quality products</p>
            <span>contact us on abc@gmail.com</span>
        </div>
        <div className='right'>
            <h1>Reach us through social media</h1>
            <img src='../../images/fb.png'/>
        </div>

    </footer>
  )
}

export default Footer