import { Component } from 'react';
import React from "react";
import {Link} from "react-router-dom";
import ThirdImage from '../img/Img3.png';
export interface About {
    
}
 
const About: React.SFC<About> = () => {
    return ( 
       <div className="MainTop">






<div className="About">
<h1>Guides by Thousand Sunny</h1>
<p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
<div></div>
<div className="btn2">Download</div> 

</div>
<img src={ThirdImage} alt="an image" />
</div>
     );
}
 
export default About