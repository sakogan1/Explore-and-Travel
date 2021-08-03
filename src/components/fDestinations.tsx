import React from "react";

export interface Destinations {
    
}
 
const Destinations: React.SFC<Destinations> = () => {
    return ( 
        <div className="Destinations">
            <div className="text">
         <div className="Line">
             <h1>
                Featured destinations
            </h1>
            <p>View all </p>
            
         </div>
            <div className="gallery">
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
            <div className="img4"></div>
            </div>
            </div>
    </div>

        
     );
}
 
export default Destinations;