import React from "react";
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';

export interface Header {
    
}
 
const Header: React.SFC<Header> = () => {
    return ( 
        <div className="header">
    <nav>
       <img src={Logo} alt="Logo" id="logo"/>

        <span></span>
        <ul><li><Link  to="/">Home</Link></li></ul>
        <ul><li><Link  to="/Destinations">Destinations</Link></li></ul>
        <ul><li><Link  to="/About">About</Link></li></ul>
        <ul><li><Link  to="/Partner">Partner</Link></li></ul>
        <div className="btn">Login</div>
        <div className="btn2">Register</div>
    </nav>        
    
    
    </div>

        
     );
}
 
export default Header;