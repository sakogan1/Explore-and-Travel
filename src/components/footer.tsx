import React from "react";
import Logo from '../img/logo.png';

export interface Footer {
    
}
 
const Footer: React.SFC<Footer> = () => {
    return ( 
      
        <div className="social">
            <div className="footer">
            <div className="grid1">
            <img src={Logo} alt="Logo" id="logo"/>

         <p>Plan and book your perfect trip with 
            expert advice, travel tips destination
            information from us</p>    
         <p>©2020 Thousand Sunny. All rights reserved</p>
    </div>
        <div className="grid2">
        <h3>Destinations</h3>
        <p>Africa</p>
        <p>Antarctica</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>America</p>
        </div>
        <div className="grid3">
        <h3>Shop</h3>
        <p>Destinaion</p>
        <p>Pictorial & Gifts</p>
        <p>Special offers</p>
        <p>Delivery Times</p>
        <p>FAQ</p>
        </div>
        <div className="grid4">
        <h3>Interests</h3>
        <p>Adventure Travel</p>
        <p>Art And Culture</p>
        <p>Wildlife And Nature</p>
        <p>Family Holidays</p>
        <p>Food And Drink</p>
        </div>

    </div>
    <div className="lineup">
    <i className="fab fa-twitter"></i>
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-instagram"></i>
    <i className="fab fa-linkedin-in"></i>
    <i className="fab fa-youtube"></i></div>
    </div>

        
     );
}
 
export default Footer;