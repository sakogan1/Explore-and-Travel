import { Component } from 'react';
import React from "react";
import {Link} from "react-router-dom";
import FirstImage from '../img/Img1.png';
import Line from '../img/Line.png';

export interface MainTop {
    
}
 
const MainTop: React.SFC<MainTop> = () => {
    return ( 
       <div className="MainTop">



<div className="select">
<h1>Explore and Travel</h1>
<div></div>
<p>Holiday Finder</p>
<div></div>
<img src={Line} alt="IMAGE" id="Line"/>
<div></div>
    <input type="datalist" placeholder="Location"/>
     <input type="datalist" placeholder="Activity"/>
     <input type="datalist" placeholder="Grade"/>
     <input type="datalist" placeholder="Date"/>
<div className="btn2">Explore</div> 
</div>

<img src={FirstImage} alt="IMAGE" />

       </div>
     );
}
 
export default MainTop;