import React,{useState,useEffect,handleSearch} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import "../../styles/buslist.css";

import{Button,Modal, ModalTitle} from 'react-bootstrap'
import{faTrash} from "@fortawesome/free-solid-svg-icons";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import{Link, link} from "react-router-dom";



export default function AllBusRouter1()
{
   const[busrouters,setBusRouters]=useState([]);




   


useEffect(()=>{
    function getBusRouter(){
        axios.get("http://localhost:8070/busrouter/").then((res)=>{
            setBusRouters(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
        
        
    }
    getBusRouter();
   },[])

   const handleDelete=(id)=>{
    axios.delete(`http://localhost:8070/busrouter/delete/${id}`)
    .then(res=>{console.log(res)
     window.location.reload()})
     .catch(err=>console.log(err))
   }


  
   
   


   




   

  
   
   
    return(
        <div className="container">


           <table class="table table-hover ">
                <thead class="thead-dark" >
                    <tr >
                         <th class="table-secondary" scope="col">Departure Place</th>
                         <th class="table-secondary" scope="col">Arrival Place:</th>
                         <th class="table-secondary" scope="col"> Departure Time</th>
                         <th class="table-secondary" scope="col"> Arrival Time</th>
                         <th class="table-secondary" scope="col"> Bus Name</th>
                         <th class="table-secondary" scope="col"> Bus Number</th>
                         <th class="table-secondary" scope="col"> Fair</th>
                         <th class="table-secondary" scope="col"> seat Available</th>
                         <th class="table-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        busrouters.map(busrouter => {
                            return( <tr>
                                  <td class="table-success">{busrouter.departureplace}</td>
                                  <td class="table-info">{busrouter.arrivalplace}</td>
                                  <td class="table-success">{busrouter.departuretime}</td>
                                  <td class="table-info">{busrouter.arrivaltime}</td>
                                  <td class="table-success">{busrouter. busname}</td>
                                  <td class="table-info">{busrouter.busnumber}</td>
                                  <td class="table-success">{busrouter.price}</td>
                                  <td class="table-info">{busrouter.savilable}</td>
                                  <td class="table-success">
                                    <Link to={`/update/${busrouter._id}`} className='btn btn-success'  >Update</Link>
                                    <button className='btn btn-danger' onClick={(e)=>handleDelete(busrouter._id)}>Delete</button>
                                  </td>

                                  
                               </tr>);
                         })
                    }
                </tbody>
            </table>

           
           


            
        



        </div>

        







    )
}