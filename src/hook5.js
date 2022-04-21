import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';// add this line

const HookFive = () =>{
    const[item, updateItem] = useState([]);

    const getItem = () =>{
        fetch("http://localhost:1234/itemlist")
        .then(response=>response.json())
        .then(itemArray=>{
            updateItem(itemArray.reverse());
        })
    }
    useEffect(()=>{
        getItem();
    },[1]);

    const[message, updateMessage] = useState("");
    const deleteItem = (itemid, name) =>{
       var url = "http://localhost:1234/itemlist/"+itemid;
        axios.delete(url)
        .then(response=>{
            updateMessage(name + " Deleted Successfully !");
            getItem();// to reload the list
        })
    }

    return(
        <div id="height500">
            <h3> Available Products : {item.length} </h3>
            <p align="center"> {message} </p>
            <p align="right"> <Link to="/hookpage6"> Add New Item </Link> </p>
            {
                item.map((info, index)=>{
                    return(
                        <div key={index} className="company">
                            <h3> {info.name} </h3>
                            <img src={info.photo} height="120" width="100%"/>
                            <p>Price : {info.price} </p>
                            <p> {info.details} </p>
    <button onClick={deleteItem.bind(this, info.id, info.name)}>Delete</button>
                        </div>
                    )
                })
            }
            <div id="clearblock"></div>
        </div>
    )
}

export default HookFive;