import React from 'react';

const ItemDetails = (props) =>{
    return(
        <div className="company">
            <h5> {props.itemname} </h5>
            <p> Rs : {props.itemprice} </p>
            <p> Qty : {props.itemqty} </p>
            <button> Buy Now </button>
        </div>
    )
}

export default ItemDetails;