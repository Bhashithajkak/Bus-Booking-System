import React from "react";
import Helmet from "../Component/Helmet/Helmet";
import CommonSection1 from "../Component/UI/CommonSection1";
import AllBusRouter2 from "../Component/UI/AllBusRouter2";
import FindRouter from "../Component/UI/FindRouter";

import { Container, Row, Col } from "reactstrap";
const Tours=()=>{


 
    return(
      
        <Helmet title="Tours">
        
           
            <CommonSection1 title="Tours"/>
            <section> 

            


            </section>
           

            
            <AllBusRouter2/>
        </Helmet>
    );
};
export default Tours;

