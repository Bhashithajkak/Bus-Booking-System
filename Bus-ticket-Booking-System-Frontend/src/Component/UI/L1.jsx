import React from "react";
import{Container,Row,Col,Form,FormGroup,Button } from 'reactstrap';
import { Link } from "react-router-dom";
import "../../styles/login.css"

import loginImg from "../../assets/images/login.png"
import userIcon from '../../assets/images/user.png'

const L1=()=>{
    return<section>
        <Row>
            <Col lg='8' className="m-auto">
                <div className="login__container d-flex justify-content-between">
                    <div className="login__img">
                        <img src={loginImg} alt=" "/>
                    </div>
                    <div className="login__form">
                        <div className="user">
                            <img src={userIcon} alt=""/>
                        </div>
                        <h2>Login</h2>
                        <from>
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="email"
                               />
                            </FormGroup>
                            <FormGroup>
                                <input type="password" placeholder="Password" required id="password"
                                />
                            </FormGroup>
                            <Button className="btn secondary_btn auth_btn" type="submit">LOgin</Button>
                        </from>
                         <p>Don't have an accoun? <Link to=''>create</Link></p>

                    </div>
                </div>
            </Col>
        </Row>
    </section>
}
export default L1;