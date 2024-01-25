import React from "react";
import biryani from '../Assets/Food/biryani.png'
import fish from '../Assets/Food/fish.png'
import kfc from '../Assets/Food/kfc.png'
import icecream from '../Assets/Food/icecream.png'
import pizza from '../Assets/Food/pizza.png'


const Food = ()=>{
    return(
        <div className="food-item-image ">
            
      <div>
        <img src={biryani} alt=""  />
        <button className="food-item-button">Briyani</button>
       </div>        
         <div >
            <img src={fish} alt=""/>
            <button className="food-item-button">Fish</button>
         </div>
         <div className="kfc-container" >
            <img src={kfc} alt=""/>
            <button className="food-item-button">Kfc</button>
         </div>
         <div >
            <img src={pizza} alt=""/>
            <button className="food-item-button">Pizza</button>
         </div>
         <div >
            <img src={icecream} alt=""/>
            <button className="food-item-button">Icecream</button>
         </div>
         </div>
    )
}

export default Food;