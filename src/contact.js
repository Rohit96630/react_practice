import React from 'react';
function Contactus(){
    let mobile = [1111111111,
                  2222222222,
                  3333333333,
                  4444444444,
                  5555555555,
                  6666666666,
                  7777777777,
                  8888888888,
                  9999999999,
                  1010101010,
                  1111111111,
                  1212121212,
                  1313131313,
                  1414141414,
                  1515151515
                ]
    return(
        <div id="height500">
            <h1>Contact Us - count {mobile.length}</h1>
            {
                mobile.map((mnum, index) =>{
                    return(
                        <p key={index} class="company">{index+1} . {mnum}</p>
                    )
                })
            }
        </div>
    )
}
export default Contactus;
