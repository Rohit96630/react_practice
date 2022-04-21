import React, {Component} from 'react';

class Myclass1 extends Component{
    constructor(){
        super(); // to call parent class constructor
        this.state={
            counter:5, 
            click:0,
            booklist:["html", "css", "javascript", "React", "Angular", "Python"]
        }
    }

    one = () =>{
       this.setState({ 
           counter : this.state.counter+5 , 
           click : this.state.click + 1
        })
    }

    two = () =>{
        this.setState({ 
            counter : this.state.counter-5 , 
            click : this.state.click + 1
         })
     }

    render(){
        return(
            <div id="height500" align="center">
                <h1> React Class Component Simple State Management </h1>
                <h2> The Counter is : { this.state.counter } </h2>
                <p> The Total Clicks Are : {this.state.click} </p>
                <button onClick={this.one}> Click Me To + By 5 </button>
                <button onClick={this.two}> Click Me To - By 5 </button>

                <h2> Available Books : {this.state.booklist.length} </h2>
                <table cellPadding="15">
                    <thead>
                        <tr>
                            <th> Sl No </th>
                            <th> Book Name </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.booklist.map((book, index) => {
                    return(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{book}</td>
                        </tr>
                    )
                })
                }
            </tbody>

                </table>
            </div>
        )
    }
}

export default Myclass1;

