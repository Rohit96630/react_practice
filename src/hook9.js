import React from 'react';
import ItemDetails from './hook10';

const ItemList = () =>{
    const Item=[
        {name:"Banana", price:200, qty:"100/kg"},
        {name:"Grapes", price:149, qty:"89/kg"},
        {name:"Banana", price:68, qty:"90/kg"},
        {name:"Watermelon", price:134, qty:"180/kg"},
        {name:"Pinaaaple", price:200, qty:"160/kg"}
    ];

    return(
        <div id="height500">
            <h1 align="center"> React JS Component Re-Use + Props Example </h1>

            <ItemDetails itemname="Mango" itemprice="200/Kg" itemqty="5"/>
            <ItemDetails itemname="Banana" itemprice="40/Kg" itemqty="3"/>
            <ItemDetails itemname="Orange" itemprice="80/Kg" itemqty="3"/>
            <ItemDetails itemname="Milk" itemprice="20/Kg" itemqty="3"/>

            {
               Item.map((info, index)=>{
                   return(
                       <ItemDetails
                       itemname={info.name}
                       itemprice={info.price}
                       itemqty={info.qty}
                       key={index}
                       />
                   )
               }) 
            }

            <div id="clearblock"></div>
        </div>
    )
}
export default ItemList;