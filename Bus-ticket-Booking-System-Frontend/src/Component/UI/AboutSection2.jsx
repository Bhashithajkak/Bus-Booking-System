import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/images/OIP (5).jpeg";
import aboutImg1 from "../../assets/images/RR.png";
import aboutImg3 from "../../assets/images/CC.jpeg";
import aboutImg2 from "../../assets/images/address-512.webp";
import AddFeedBack from "../UI/AddFeedBack";


const AboutSection2 = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "100px" }
      }
    >
      <Container>
        <Row>


       

          <Col lg="4" md="4">
            <div className="about__img">
              
            <h3>       Call US:</h3>
              <h3       >0705830147</h3>
              <img src={aboutImg} alt="" className="w-1000" />
              
            </div>
          </Col>

          <Col lg="4" md="4">
            <div className="about__img">
              
              <h3>       Email US:</h3>
              <h3       >ishan1998sri@gmail.com</h3>
              <img src={aboutImg1} alt="" className="w-1000" />
             
            </div>
          </Col>

          <Col lg="4" md="4">
            <div className="about__img">
             
              <h3>       Address:</h3>
              <h3       >No/10</h3>
              <img src={aboutImg2} alt="" className="w-1000" />
              
            
            </div>
          </Col>


         


          
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection2;