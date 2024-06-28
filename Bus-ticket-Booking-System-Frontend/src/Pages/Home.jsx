import React from "react";

import image1 from '../assets/images/front.jpeg';

import HeroSlider from "../Component/UI/HeroSlider";
import Helmet from "../Component/Helmet/Helmet";


import { Container, Row, Col } from "reactstrap";
import FindRouter from "../Component/UI/FindRouter";
import Testimonial from "../Component/UI/Testimonial";


import Data from "../assets/images/data/Data";
import Item from "../Component/UI/Item";


import '../styles/home.css'
import AboutSection from "../Component/UI/AboutSection";



const Home=()=>{
    return(
        <Helmet title="Home">
      {/* ============= hero section =========== */}
            <section className="p-0 hero__slider-section">
                 <HeroSlider />


                 <div className="hero__form">
          
        </div>
           </section>

           <AboutSection/>
           {/*service section*/}
           <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5 text-center">
                        <h5 className="section__title">see our</h5>
                        <h1 className="section__title">Facilities</h1>
                    </Col>

                    {Data.slice(0,6).map((item)=>(<Item item={item} key={item.id}/>))}
                </Row>
            </Container>
           </section>

           <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__title text-center">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>




        </Helmet>
    )
};
export default Home;

