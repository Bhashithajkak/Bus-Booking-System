import React from "react";
import Helmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import Addbusrouter from "../Component/UI/AddBusRouter";
import AddFeedBack from "../Component/UI/AddFeedBack";
import AboutSection2 from "../Component/UI/AboutSection2";

const ContactUs=()=>{
    return(
        <Helmet title="ContactUs">

             <CommonSection title="Contact Us"/>
             <AboutSection2/>
             <br/>
             <br/>


             <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__title text-center">Your</h6>
              <h2 className="section__title">FeedBack</h2>
            </Col>

            <AddFeedBack/>

           
          </Row>
        </Container>
      </section>

            
            
        </Helmet>
    );
};
export default ContactUs;

