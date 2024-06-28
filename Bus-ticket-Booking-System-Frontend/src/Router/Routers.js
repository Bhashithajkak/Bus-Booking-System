import React from "react"
import {Routes,Route,Router,Navigate} from 'react-router-dom';


import Home from '../Pages/Home';
import ContactUs from '../Pages/ContactUs';
import AboutUs from '../Pages/AboutUs';
import Login from '../Pages/Login';
import SinUp from '../Pages/SinUp';
import Tours from '../Pages/Tours';
import UpdateStudent from "../Component/UI/UpdateStudent";
import UpdateBusRouter from "../Component/UI/UpdateBusRouter";
import AllStudent from "../Component/UI/AllStudent";
import Boking from "../Pages/Boking";
import UpdateBooking from "../Component/UI/UpdateBooking";
import Admin from "../Pages/Admin";
import Customer from "../Pages/Customer";
const Routers=()=>{

    return(

        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/sinup' element={<SinUp/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route  Path="/admin" element={<Admin/>}></Route>

            <Route path="admin" exact Component={Admin}/>
            <Route path="customer" exact Component={Customer}/>
            <Route  path="/Sheatview/:id" element={<Boking/>}></Route>
            <Route  path="/booking/:id" element={<UpdateBooking/>}></Route>
           
            <Route  path="/update/:id" element={<UpdateBusRouter/>}></Route>

         </Routes>

    )
    
};

export default Routers

