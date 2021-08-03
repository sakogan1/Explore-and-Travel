import { Component } from 'react';
import React from "react";
import {Link} from "react-router-dom";
import SecondImage from '../img/Img2.png';
export interface explore {
    
}
 
const explore: React.SFC<explore> = () => {
    return ( 
       <div className="MainTop">





<img src={SecondImage} alt="IMAGE" />
<div className="explore">

<h1>A new way to explore the world </h1>
<p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
trip, but now, they can also let Lonely Planet Experiences lead the way  </p>
<div></div>
<div className="btn2">Learn more</div> 
</div>
       </div>
     );
}
 
export default explore