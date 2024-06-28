import React from "react";
import AllStudent from "../Component/UI/AllStudent";
import Helmet from "../Component/Helmet/Helmet";
import AllBusRouter from "../Component/UI/AllBusRouter";
import CommonSection from "../Component/UI/CommonSection";
import AboutSection1 from "../Component/UI/AboutSection1";
import { Container, Row, Col } from "reactstrap";
import Data1 from "../assets/images/data/Data1";
import Item1 from "../Component/UI/Item1";
const AboutUs=()=>{

    
    return(
        <Helmet title="AboutUs">

             <CommonSection title="Aboutus"/>
             
                <AboutSection1/>
                <section>
            <Container>
                <Row>
                    

                    {Data1.slice(0,6).map((item1)=>(<Item1 item={item1} key={item1.id}/>))}
                </Row>
            </Container>
           </section>
             

        </Helmet>
    );
};
export default AboutUs;

