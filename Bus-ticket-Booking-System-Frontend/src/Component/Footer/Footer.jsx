import React from "react";


import logo from '../../assets/images/logo1.jpg';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Ticket policy",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact us",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
                
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <img src={logo} alt=""/>
                  <span>
                    ONLINE TICKET <br /> BOKING
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              
            </p>
            <div className="social__links d-flex align-items-center gap-4">
                <span>
                    <i class="ri-facebook-line"></i>
                </span>

                <span>
                     <i class="ri-github-line"></i>
                </span>

                <span>
                     <i class="ri-twitter-fill"></i>
                </span>

                <span>
                    <i class="ri-instagram-fill"></i>
                </span>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">

              <h5 className="footer__link-title mb-4">Our Details</h5>

              <ListGroup className="footer__quick__links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                        <span>
                        <i class="ri-map-pin-line"></i>

                        </span>
                        Address:
                    </h6>
                    <p className="mb-0"> NO/02/Mathara</p>
                </ListGroupItem>
              </ListGroup>
              <br>
              </br>

              <ListGroup className="footer__quick__links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                        <span>
                        <i class="ri-phone-line"></i>

                        </span>
                        Phone:
                    </h6>
                    <p className="mb-0"> +94123456</p>
                </ListGroupItem>
              </ListGroup>
             
              <br>
              </br>

              <ListGroup className="footer__quick__links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                        <span>
                        <i class="ri-mail-line"></i>

                        </span>
                        Email:
                    </h6>
                    <p className="mb-0"> ishan@1998gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;