import React from "react";
import {Container,Row,Button} from 'reactstrap';
import { NavLink,Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo1.jpg';
import './header.css'
import { useSelector, useDispatch} from "react-redux";
import { logout } from "../Redux/authSlice";
import userInfo from '../UI/Signin';

const nav_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/aboutUs',
        display:'AboutUs'
    },

    {
        path:'/tours',
        display:'Tours'
    },

    {
        path:'/contactus',
        display:'CotactUs'
    },

   

]

const isLogged = userInfo !== null;
const Header=()=>{

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    const handleLogout = () => {
        dispatch(logout());
        navigate('/home');
    };

    const handleLogout1 = () => {
        // Clear user session data when logging out
        localStorage.removeItem('userInfo');
        // Redirect to the login page or any other suitable page
        window.location.href = '/login'; // Redirect to the login page
      };





    return(
    <header className="header">
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center
                justify-content-between">
                    <div className="logo">
                        
                        <img src={logo} alt=""/>
                    </div>
                    
                       
                   
                   
                         <div className="navigation">
                                    <ul className="menu d-flex align-items-center gap-5">
                                        {nav_links.map((item,index)=>(
                                            <li className="nav_item" key={index}>
                                                <NavLink to={item.path} className={navClass=>navClass.isActive?"active_link":""}>{item.display}</NavLink>
    
                                        </li>
                                    ) ) }
                                    {isLogged?(<div className="nav__btns d-flex align-items-center gap-3 ">
                                        <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                                        <Button className="btn secondary__btn" onClick={handleLogout1}> Logout</Button>
                                        <Button className="btn primary__btn"><Link to='/sinup'>SinUp</Link></Button>
                                       
                                        </div>):(<Button>fuck</Button>)}
                                        
                                    </ul>
                                    <div className="nav__right d-flex algin-items-center gap-3 ">
                                    
                                </div>
                            </div>  
                       
                    
                </div>
            </Row>
        </Container>
    </header>);
};
export default Header;

