import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/images/why.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              
              <h1 className="section__title">Why should you choose our plateform?</h1>

              

              <br></br>

              <p className="section__description">
              One of the ultimate benefits when you book bus ticket online, or KTM/ETS train tickets or ferry tickets is you can book in advance from anywhere and whenever you want.
              This is especially useful for tourists and for those with difficulties to access the bus terminal, train station or ferry ticket counter. 
              Instead, you can save the cost and time going to the stations and terminals to buy the tickets.

              We offer various secured payment options including e-wallet, credit cards, debit cards, internet banking, Alipay and many more for your convenience.
              Say no more long queues and avoid disappointment of tickets being sold out when you book your bus, train and ferry tickets in advance online.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="4" md="4">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;