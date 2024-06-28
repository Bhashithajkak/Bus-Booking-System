import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/images/about.png";

const AboutSection1 = ({ aboutClass }) => {
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
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>



          <Col lg="6" md="6">
            <div className="about__section-content">
              
              <h1 className="section__title">Some Word About Us</h1>

              

              <br></br>

              <p className="section__description">
              with year of experience in the software industry, we can help you build quality software solutions to keep you ahead of condition.
              our company is online booking system company. Our company providing services including travel ticket booking (bus, train, taxi), hotels rooms booking, house booking and visiting place booking. 
              By this project provide convenient and user-friendly method for passengers to book bus tickets over the internet. Also, it will change the traditional ticketing process, providing numerous benefits for both passengers and bus service providers.
              </p>

             

             </div>
          </Col>

         

         
          
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection1;