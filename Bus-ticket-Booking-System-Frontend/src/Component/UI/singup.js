
import React, { useState } from 'react';
import axios from 'axios';



import{Container,Row,Col,Form,FormGroup,Button } from 'reactstrap';
import { Link } from "react-router-dom";
import "../../styles/login.css"

import loginImg from "../../assets/images/register.png"
import userIcon from '../../assets/images/user.png'


export default function Signup() {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');

  function sendData(e){
    e.preventDefault();

    
    
    const newCustomer={
        name,
        gender,
        email,
        phonenumber,
        password
    }
    axios.post("http://localhost:8070/customer/signup",newCustomer).then(()=>{
        alert("user Added")
    }).catch((err)=>{
        alert(err)
    })

  }






  return (



    <section>
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
                                <input type="Name" onChange={(e) => setName(e.target.value)}  placeholder="Name" required id="Name"
                               />
                            </FormGroup>
                            <FormGroup>
                                <input type="Gender"  onChange={(e) => setGender(e.target.value)} placeholder="Gender" required id="Gender"
                                />
                            </FormGroup>

                            <FormGroup>
                                <input type="phonenumber"  onChange={(e) => setPhonenumber(e.target.value)} placeholder="phonenumber" required id="phonenumber"
                                />
                            </FormGroup>

                            <FormGroup>
                                <input type="Email"  onChange={(e) => setEmail(e.target.value)} placeholder="Email" required id="Email"
                                />
                            </FormGroup>

                            <FormGroup>
                                <input type="Password"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" required id="Password"
                                />
                            </FormGroup>


                            <Button className="btn secondary_btn auth_btn"   onClick={sendData} type="Sinup">SinUp</Button>
                        </from>
                        

                    </div>
                </div>
            </Col>
        </Row>
    </section>












  )
}
