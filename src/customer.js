import React,{useState} from 'react';
function Customer(){
    let mycustomer = ["Ramesh","Raju", "Ganesh", "Mohit", "Ravi", "Manu", "Alex"];
    const[customerlist, updateCustomer] = useState(mycustomer);
    const[newcustomer, pickCustomer] = useState("");

    const save = () =>{
        updateCustomer(customerlist =>[...customerlist, newcustomer]);
    }
    return(
        <div id="height500">
            <h1> {customerlist.length} - Customer List </h1>

            <p>
                New Customer : 
                <input type="text" onChange={obj=>pickCustomer(obj.target.value)}/>
                <button onClick={save}>Save Customer </button>
            </p>

            {
                customerlist.map((fullname , index)=>{
                    return(
                        <p className="company" key={index}> 
                            {index} . {fullname}  
                            <br/><br/>
                            <button> Delete </button>
                        </p>
                    )
                })
            }
        </div>
    )
}
export default Customer;