import React from 'react';
function Project(){
    let myproject = [
                    "https://www.infocampus.co.in", 
                    "https://www.uimaster.in",
                    "https://www.firstenquiry.com",
                    "https://www.globalleads.in",
                    "https://www.campusinterview.in",
                    "https://www.gyanguide.in",
                    "https://www.angularexpert.in",
                    "https://www.careerliftup.in"
                ];
    return(
        <div id="height500">
            <h1> {myproject.length} - Project List </h1>
            {
                myproject.map((pname, index)=>{
                    return(
                        <p key={index}>  
                            <a href={pname} target="_blank"> {pname} </a>
                        </p>
                    )
                })
            }
        </div>
    )
}
export default Project;