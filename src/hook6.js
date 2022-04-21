import React,{useState} from 'react';
import axios from 'axios';
const HookSix = () =>{
    const[message, updateMessage] = useState("Enter Item Details");
    const[itemname, pickName] = useState("");
    const[itemprice, pickPrice] =  useState("");
    const[itemqty, pickQty] = useState("");
    const[itemdetails, pickDetails] = useState("");
    const[itemphoto, pickPhoto] = useState("");

    // axios.get(); // to fetch the data
    // axios.post(); // to add new data
    // axios.delete(); // to delete the data 
    // axios.put(); // to update the data
    const save = () =>{
        var url = "http://localhost:1234/itemlist";
        var newitem = {
            "name":itemname,
            "price":itemprice,
            "qty":itemqty,
            "photo":itemphoto,
            "details":itemdetails
        };
        axios.post(url, newitem)
        .then(response=>{
            updateMessage(itemname + " Save Successfully !");
        })
    }
    return(
        <div id="height500">
            <h1 align="center"> Add Item To Json Server </h1>
            <p align="center"> {message} </p>
            <table align="center" cellPadding="10">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <td><input type="text" onChange={obj=>pickName(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Price</th>
                        <td><input type="text" onChange={obj=>pickPrice(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Quantity</th>
                        <td><input type="text" onChange={obj=>pickQty(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Details</th>
                        <td><input type="text" onChange={obj=>pickDetails(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Photo</th>
                        <td><input type="text" onChange={obj=>pickPhoto(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th colspan="2">
                            <button onClick={save}>Save Item</button>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default HookSix;