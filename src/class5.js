import React, { Component} from "react";
import Myclass6 from "./class6";
class Myclass5 extends Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div id="height500">
                <h1> React Class Component props Example </h1>
                <Myclass6 name="Apple" price="Rs.300" photo="1.jpg" details="good"/>
                <Myclass6 name="Apple2" price="Rs.300" photo="2.jpg" details="good"/>
                <Myclass6 name="Apple3" price="Rs.300" photo="3.jpg" details="good"/>
                <Myclass6 name="Apple4" price="Rs.300" photo="4.jpg" details="good"/>

                <div id="clearblock"></div>
            </div>
        )
    }
}

export default Myclass5;



