import React, {useState} from 'react';

function Register(){
    const[userlist, updateUser] = useState( ["Ramesh", "Ganesh", "Raju"] );
    const one = () =>{
        updateUser( userlist=>[...userlist, "Alex"] );
        //  a = a + b 
    }

    return(
        <div id="height500">
            <h1> Registered Users : {userlist.length} </h1>
            <button onClick={one}> + Add User </button>
            {
                userlist.map((name, index)=>{
                    return(
                        <p key={index}> {name} </p>
                    )
                })
            }
        </div>
    )
}
export default Register;