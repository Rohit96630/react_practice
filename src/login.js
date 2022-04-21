import React, {useState} from 'react';
function Login(){
    const[user, updateUser] = useState( ["Ramesh", "Ganesh", "Suresh"] );
    const[newuser, pickUser] = useState("");

    const save = () =>{
        updateUser( user=>[...user, newuser]);
    }

    const deleteuser = (userindex) =>{
        user.splice(userindex, 1);
        updateUser(user =>[...user]);
    }

    return(
        <div id="height500" align="center">
            <h1> Total Users : {user.length}  </h1>
            <p> 
                Enter Full Name : 
                <input type="text" onChange={obj=>pickUser(obj.target.value)}/>
                <button onClick={save}>Save User </button>
            </p>
            <p> {newuser} </p>
            <table align="center" cellPadding="10" width="600">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Full Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((name, index)=>{
                            return(
                                <tr key={index} align="center">
                                    <td> {index} </td>
                                    <td> {name} </td>
                                    <td> 
        <button onClick={ deleteuser.bind(this, index) }>Delete</button> 
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
export default Login;