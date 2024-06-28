import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import loginImg from "../../assets/images/login.png";
import userIcon from '../../assets/images/user.png';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      if (userInfo.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/customer');
      }
    }
  }, [navigate]);

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post("http://localhost:8070/customer/login", {
        email,
        password,
      }, config);

      localStorage.setItem('userInfo', JSON.stringify(data));

      if (data.status === "FAILED") {
        // Handle the error case here, display a message to the user
        console.log(data.message);
      } else {
        // User has successfully logged in
        if (data.isAdmin) {
          navigate('/admin'); // Redirect to the admin page
        } else {
          navigate('/customer'); // Redirect to the customer page
        }
      }
    } catch (error) {
      // Handle any network or request errors here
      console.error(error);
    }
  };

  return (
    <section>
      <Row>
        <Col lg='8' className="m-auto">
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt=" " />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>
              <form onSubmit={sendData}>
                <FormGroup>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    id="email"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    id="password"
                  />
                </FormGroup>
                <Button className="btn secondary_btn auth_btn" type="submit">Login</Button>
              </form>
              <p>Don't have an account? <Link to='/sinup'>Create</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Signin;
