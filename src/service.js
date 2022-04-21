import React from 'react';
function Service(){
    let myservice = [
        {
            name:"Website Development", 
            technology:["html", "css", "javascript", "php", "nodejs", "mysql"] 
        },
        {
            name:"Mobile App Development", 
            technology:["Android", "iOS", "Kotlin", "Phonegap", "Window"] 
        },
        {
            name:"Software Development", 
            technology:["Java", ".Net", "NodeJs", "Python", "Ruby Rail"] 
        }
    ];

    return(
        <div id="height500">
            <h1> {myservice.length} - Our Services </h1>
            {
                myservice.map((info, index)=>{
                    return(
                        <fieldset key={index} className="service">
                            <legend> {info.name} - {info.technology.length}</legend>

                              {
                                info.technology.map((techname, index2)=>{
                                    return(
                                        <p key={index2}> {index2 + 1} . {techname} </p>
                                    )
                                })  
                              }

                        </fieldset>
                    )
                })
            }
        </div>
    )
}
export default Service;