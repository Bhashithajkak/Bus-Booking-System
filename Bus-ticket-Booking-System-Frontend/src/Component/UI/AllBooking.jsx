import React,{useState,useEffect,handleSearch} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import "../../styles/buslist.css";

import{Button,Modal, ModalTitle} from 'react-bootstrap'
import{faTrash} from "@fortawesome/free-solid-svg-icons";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import{Link, link} from "react-router-dom";



export default function AllBooking()
{
   const[bookingdetails,setBookingDetails]=useState([]);




   


useEffect(()=>{
    function getBookingDetail(){
        axios.get("http://localhost:8070/bookingdetail/").then((res)=>{
            setBookingDetails(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
        
        
    }
    getBookingDetail();
   },[])

   const handleDelete=(id)=>{
    axios.delete(`http://localhost:8070/bookingdetail/delete/${id}`)
    .then(res=>{console.log(res)
     window.location.reload()})
     .catch(err=>console.log(err))
   }


  
   
   


   




   

  
   
   
    return(
        <div className="container">


           <table class="table table-hover ">
                <thead class="thead-dark" >
                    <tr >
                         <th class="table-secondary" scope="col">Name</th>
                         <th class="table-secondary" scope="col">Gender</th>
                         <th class="table-secondary" scope="col"> Departure Time</th>
                         <th class="table-secondary" scope="col"> Arrival Time</th>
                         <th class="table-secondary" scope="col"> Journy Date</th>
                         <th class="table-secondary" scope="col"> From</th>
                         <th class="table-secondary" scope="col"> To</th>
                         <th class="table-secondary" scope="col"> BusNumber</th>
                         <th class="table-secondary" scope="col"> MobileNumber</th>
                         <th class="table-secondary" scope="col"> seat Number</th>
                         <th class="table-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        bookingdetails.map(bookingdetail => {
                            return( <tr>
                                  <td class="table-success">{bookingdetail.name}</td>
                                  <td class="table-info">{bookingdetail.gender}</td>
                                  <td class="table-success">{bookingdetail.dtime}</td>
                                  <td class="table-info">{bookingdetail.atime}</td>
                                  <td class="table-success">{bookingdetail.journeydate}</td>
                                  <td class="table-info">{bookingdetail.from}</td>
                                  <td class="table-success">{bookingdetail.to}</td>
                                  <td class="table-info">{bookingdetail.busnumber}</td>
                                  <td class="table-success">{bookingdetail.tnumber}</td>
                                  <td class="table-success">{bookingdetail.seatnumer}</td>
                                  <td class="table-info">
                                    <Link to={`/booking/${bookingdetail._id}`} className='btn btn-success'  >Change</Link>
                                    <button className='btn btn-danger' onClick={(e)=>handleDelete(bookingdetail._id)}>Cancel</button>
                                  </td>

                                  
                               </tr>);
                         })
                    }
                </tbody>
            </table>

           
           


            
        



        </div>

        







    )
}