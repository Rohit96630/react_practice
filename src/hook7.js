import React from 'react';
import Companydetails from './hook8';

const CompanyList = () =>{

    return(
        <div id="height500">
            <h1 align="center"> React JS Component Re-Use Example </h1>
            <Companydetails/>
            <Companydetails/>
            <Companydetails/>
            <Companydetails/>
            <Companydetails/>
            <Companydetails/>
            <div id="clearblock"></div>
        </div>
    )
}

export default CompanyList;