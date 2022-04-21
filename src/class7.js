import React, {Component} from "react";
import axios from "axios";

class Myclass7 extends Component{
    constructor(){
        super();
        this.state = {
            pname:'',
            pprice:'',
            pqty:'',
            pphoto:'',
            pdetail:'',
            message:''
        }
    }

    pickName = (obj)=>{
        this.setState({pname : obj.target.value})
    }

    pickPrice = (obj)=>{
        this.setState({pprice : obj.target.value})
    }

    pickQty = (obj)=>{
        this.setState({pqty : obj.target.value})
    }

    pickPhoto = (obj)=>{
        this.setState({pphoto : obj.target.value})
    }

    pickDetails = (obj)=>{
        this.setState({pdetails : obj.target.value})
    }

    Save = () =>{
        var url = "http://localhost:1234/itemlist";
        var iteminfo = {
            "name": this.state.pname,
            "price": this.state.pprice,
            "qty": this.state.pqty,
            "photo": this.state.pphoto,
            "details": this.state.pdetail
          };
          axios.post(url, iteminfo).then(response=>{
              this.setState({
              message:this.state.pname + "Added Successfully",
              pname:'',
              pprice:'',
              pqty:'',
              pphoto:'',
              pdetail:''
            })     
            })
        }
    

    render(){
        return(
            <div id="height500">
                <h1> add New Item </h1>
                <p> {this.state.message} </p>
                <table cellPadding="10">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <td><input type="text" onChange={this.pickName}
                            value={this.state.pname}/></td>
                        </tr>
                        <tr>
                            <th>Item Price</th>
                            <td><input type="text" onChange={this.pickPrice}
                              value={this.state.pprice}/></td>
                        </tr>
                        <tr>
                            <th>Item Qty</th>
                            <td><input type="text" onChange={this.pickQty}
                              value={this.state.pqty}/></td>
                        </tr>
                        <tr>
                            <th>Item Photo</th>
                            <td><input type="text" onChange={this.pickPhoto}
                              value={this.state.pphoto}/></td>
                        </tr>
                        <tr>
                            <th>Item Details</th>
                            <td><input type="text" onChange={this.pickDetails}
                              value={this.state.pdetails}/></td>
                        </tr>
                        <tr>
                            <th colSpan="2">
                                <buttton onClick={this.save}>Save</buttton>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default Myclass7;