import React, {useState} from 'react';

const HookTwo = () =>{

    const[n1, pickValue1] = useState(0);
    const[n2, pickValue2] = useState(0);
    const[n3, pickValue3] = useState(0);
    const[result, updateResult] = useState("");

    const greatest = () =>{

        if( n1>n2 && n1>n3 ){
            updateResult(" Number is : " + n1);
        }
        else if( n2>n1 && n2>n3 ) {
            updateResult(" Number is : " + n2);  
        }else{
            updateResult(" Number is : " + n3);
        }
    }
// updateResult(name + " Looking For "+ service + " in " + city);
    return(
        <div id="height500">
            <h1>Heighest of three numbers</h1>
            <p>
                Number one: <input type="number" onChange={obj=>pickValue1(obj.target.value)}/>
                Number two: <input type="number" onChange={obj=>pickValue2(obj.target.value)} />
                Number three: <input type="number" onChange={obj=>pickValue3(obj.target.value)} />
            </p>

            <button onClick={greatest}>Find Greatest</button>

            <h3>Greatest: {result}</h3>
        </div>
    )
}

export default HookTwo;