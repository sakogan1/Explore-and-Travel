import React from "react";
import FourthImage from '../img/Img4.png';

export interface Partner {
    
}
 
const Partner: React.SFC<Partner> = () => {
    return ( 
        <div className="Partner">
             <div className="testimonials">
             <div className="divider">
             <h1>
                Testimonials
            </h1>
            <div className="stars"></div>
            <p>
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
            </p>
            <p>
            Edward Newgate
            </p>
            <p>
            Founder Circle
            </p>
            </div>
            <img src={FourthImage} alt="IMAGE" />
             </div>
         
            <div className="text">
            <div className="Line">
             <h1>
                Featured destinations
            </h1>
            <p>View all </p>
            
         </div>
            <div className="gallery">
            <div className="img5"></div>
            <div className="img6"></div>
            <div className="img7"></div>
            <div className="img8"></div>
            </div>
            </div>
    </div>

        
     );
}
 
export default Partner;