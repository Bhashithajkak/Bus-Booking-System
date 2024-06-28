

import React from "react";
import Helmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/CommonSection";
import AllBusRouter from "../Component/UI/AllBusRouter";
import FindRouter from "../Component/UI/FindRouter";
import sinup from "../Component/UI/singup"

import { Container, Row, Col } from "reactstrap";
import Signup from "../Component/UI/singup";
import Signin from "../Component/UI/Signin";
const Login=()=>{
     return(
    
        <Helmet title="Tours">
               
        
    
        <Signin/>
        
       
    
        
       
    </Helmet>);
};
export default Login;

