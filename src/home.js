import React, {useState} from 'react';

const MyHome = () =>{
    let city = ["Bangalore", "Mumbai", "Pune", "Delhi"];
    const[a, b, Pune, Delhi] = city;

    console.log( useState() );
    const[abc , xyz] = useState(10);
    const[message , updateMessage] = useState(0);

    const one = () =>{
        xyz( abc + 5 );
        updateMessage( message+1 );
    }

    const two = () =>{
        xyz( abc - 5 );
        updateMessage( message+1 );
    }

    return(
        <div id="height500">
            <h1> Welcome Home </h1>
            <p> {city[2]} </p>
            <h2> {abc} </h2>
            <p> Total Clicks : {message} </p>
            <button onClick={one}> + By 5 </button>
            <button onClick={two}> - By 5 </button>
        </div>
    )
}

export default MyHome;