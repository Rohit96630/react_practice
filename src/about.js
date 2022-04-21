import React from 'react';
function Aboutus(){
    let mycompany=[
        "infosys",
        "samsung",
        "wipro",
        "accenture",
        "apple",
        "google",
        "cisco",
        "canon",
        "dell",
        "kodak",
        "adobe system"        
    ]
    return(
        <div id="height500">
            <h1>Company List</h1>
            {
                mycompany.map((comname, index)=>{
                    return(
        <p key={index} className="company">{index + 1} . {comname}</p>
                    )
                })
            }
            
        </div>
    )
}
export default Aboutus;
