import { ReactNavbar } from 'overlay-navbar';
import React from 'react'
import applogo from "../../images/appLogo.png";


const Header = () => {
  return (
    <ReactNavbar
    burgercolor= "#eb4034"
    burgerColorHover= "black"
    logo = {applogo}
    logoWidth = "200px"
    logoHeight = "200px"
    logoHoverSize = "10px"
    logoTransition= "0.5"
    navColor1= "rgb(35, 35, 35)"
    logoHoverColor = "white"
    link1Color = "white"
    link1Text = "Home"
    link2Text = "Products"
    link3Text = "ContactUs"
    link4Text = "About"
    link1Url= "/"
    link2Url= "/"
    link3Url= "/"
    link4Url= "/"
    nav1justifyContent = "flex-end"
    nav2justifyContent = "flex-end"
    nav3justifyContent = "flex-start"
    nav4justifyContent = "flex-start"
    link1Family = "Roboto"
    link1HoverColor = "#eb4034"
    link2HoverColor = "tomato"
    link3HoverColor = "tomato"
    link4HoverColor = "tomato"
    link1Margin = "2"
    link2Margin = "3vmax"
    link3Margin = "2"
    link4Margin = "3vmax"
    profileIconColor = "white"
    searchIconColor = "white"
    cartIconColor = "white"
    
   
    >
        
    </ReactNavbar>
  )
}

export default Header;