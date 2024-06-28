import React from "react";
import Helmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/CommonSection";
import AllBusRouter1 from "../Component/UI/AllBusRouter1";
import AllBooking from "../Component/UI/AllBooking";
import FindRouter from "../Component/UI/FindRouter";

import { Container, Row, Col } from "reactstrap";
import Addbusrouter from "../Component/UI/AddBusRouter";
import AllFeedBack from "../Component/UI/AllFeedBack";

const Admin=()=>{


  
    return(
      
        <Helmet title="Admin">
         
           
            <CommonSection title="Welcome to administrator"/>
            <h3>Bus Router Details</h3>
            <section> 
            <AllBusRouter1/>
           </section>
           <h3>Add bus router</h3>
           <section> 
            <Addbusrouter/>
           </section>
           <section>
            <h3>Customers Booking Details</h3>
            <AllBooking/>
           </section>
           <section>
            <h3>Customer Feedback </h3>
            <AllFeedBack/>
           </section>   
        </Helmet>
    );
};
export default Admin;
