import React from 'react';
import { useParams, Link } from 'react-router-dom';
const Product = () =>{
    const{pid, pname, price, pic} = useParams();
    return(
        <div id="height500" align="center">
           <h1> React useParams() Example </h1>
           <p>
               <Link to="/product/1/Mango/100/1.jpg" className='abc'>Mango</Link> 
               <Link to="/product/2/Apple/300/2.jpg" className='abc'>Apple</Link> 
               <Link to="/product/3/Orange/90/3.jpg" className='abc'>Orange</Link> 
               <Link to="/product/4/Grapes/60/4.jpg" className='abc'>Grapes</Link> 
               <Link to="/product/6/Papaya/40/5.jpg" className='abc'>Papaya</Link> 
           </p>

           <div className='company'>
               <h3>Product Id {pid} </h3>
               <p> {pname} </p>
               <img src={pic} height="150" width="90%"/>
               <p> Rs. {price} </p>
           </div>

        </div>
    )
}

export default Product;