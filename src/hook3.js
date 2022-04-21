import React, {useState} from 'react';
const HookThree = () =>{
    const[itemlist, updateItem] = useState([{name:"Apple", price:300, qty:10}]);
    const[itemname, pickName] = useState("");
    const[itemprice, pickPrice] = useState("");
    const[itemqty, pickQty] = useState("");
    const[message, updateMessage] = useState("");

    const save = () =>{
        var newitem = {name:itemname, price:itemprice, qty:itemqty};
        updateItem(itemlist =>[...itemlist, newitem] );
        updateMessage(itemname + " Added Successfully !");
        pickName("");// itemname set to empty 
        pickPrice("");
        pickQty("");
    }

    const deleteItem = (index, name) =>{
        itemlist.splice(index , 1);
        updateItem(itemlist =>[...itemlist]); // updating available items in state
        updateMessage(name + " Deleted Successfully !");
    }

    return(
        <div id="height500">
            <h3 align="center"> Add New Item </h3>
            <p align="center"> {message} </p>
            <p align="center">
                <input type="text" placeholder="Item Name" className="smallinput"
                onChange={obj=>pickName(obj.target.value)}
                value={itemname}/>

                <input type="text" placeholder="Item Price" className="smallinput"
                onChange={obj=>pickPrice(obj.target.value)}
                value={itemprice}/>

                <input type="text" placeholder="Item Quantity" className="smallinput"
                onChange={obj=>pickQty(obj.target.value)}
                value={itemqty}/>

                <button onClick={save}>Save</button>
            </p>
            <h3 align="center"> Available Items : {itemlist.length} </h3>
            <table align="center" cellPadding="5" width="70%">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((iteminfo, index)=>{
                            return(
                                <tr key={index} align="center">
                                    <td> {index} </td>
                                    <td> {iteminfo.name} </td>
                                    <td> {iteminfo.price} </td>
                                    <td> {iteminfo.qty} </td>
                                    <td> 
            <button onClick={deleteItem.bind(this, index, iteminfo.name)}>Delete</button> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HookThree;