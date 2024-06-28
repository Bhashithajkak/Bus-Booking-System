import React from "react";
import Helmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/CommonSection";
import AllBusRouter from "../Component/UI/AllBusRouter";
import FindRouter from "../Component/UI/FindRouter";

import { Container, Row, Col } from "reactstrap";
const Customer=()=>{


 
    return(
      
        <Helmet title="Tours">
          
           
            <CommonSection title="Tours"/>
           
           

            
            <AllBusRouter/>
        </Helmet>
    );
};
export default Customer;
