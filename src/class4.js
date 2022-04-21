import axios from "axios";
import {Link} from 'react-router-dom';
import React, {Component} from "react";

class Myclass4 extends Component{
    constructor(){
        super();
        this.state = {
             itemlist:[],
             message:[]
            }
    }

    getItem = () =>{
        this.setState({message: "Please wait Processing..."});

        fetch("http://localhost:1234/itemlist")
        .then(response=>response.json())
        .then(itemArray=>{
            this.setState({ itemlist:itemArray })
        })
    }

    componentDidMount(){
        this.getItem();
    }

    deleteItem = (id) =>{
        this.setState({message: "Please wait Processing..."});

        var url = "http://localhost:1234/itemlist"+id;
        axios.delete(url).then(response=>{
            this.getItem(); // after deleting, it shoud reload the item
            this.setState({message: "Item Delete successfully"});
        })
    }

    render(){
        return(
            <div id="height500">
                <h1> Total Item : {this.state.itemlist.length} </h1>
                <Link to="class7">Add New Item </Link>
                <p align="center">{this.state.message} </p>
                {
                    this.state.itemlist.map((info, index)=>{
                        return(
                            <div key={index} className="company">
                                <h3> {info.name} </h3>
                                <img src={info.photo} height="120" width="100%"/>
                                <p>Price : {info.price} </p>
                                <p> {info.details} </p>
          <button onClick={this.deleteItem.bind(this, info.id)}> Delete </button>
                            </div>
                        )
                    })
            }
            <div id="clearblock"></div>
            </div>
        )
    }
};

export default Myclass4;