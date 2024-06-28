import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateBusRouter(){


    const{id}=useParams()
    const[departureplace,setDeparturePlace]=useState()
    const[arrivalplace,setArrivalplace]=useState()
    const[departuretime,setDeparturetime]=useState()
    const[arrivaltime,setArrivaltime]=useState()
    const[busname,setBusname]=useState()
    const[busnumber,setBusnumber]=useState()
    const[price,setPrice]=useState()
    const[savilable,setAvilable]=useState("");

    const[busrouters,setBusRouters]=useState([]);
    const navigate=useNavigate()


    useEffect(()=>{
        
            axios.get(`http://localhost:8070/busrouter/get/${id}`)
            .then((res)=>{
                console.log(res)
                setDeparturePlace(res.data.busrouter.departureplace)
                setArrivalplace(res.data.busrouter.arrivalplace)
                setDeparturetime(res.data.busrouter.departuretime)
                setArrivaltime(res.data.busrouter.arrivaltime)
                setBusname(res.data.busrouter.busname)
                setBusnumber(res.data.busrouter.busnumber)
                setPrice(res.data.busrouter.price)
                setAvilable(res.data.busrouter.savilable)
                
            }).catch((err)=>{
                alert(err.message);
            })
            
            
        
       
       },[])


       const Update=(e)=>{
        e.preventDefault()

        const updateBusRouter={
            departureplace,
            arrivalplace,
            departuretime,
            arrivaltime,
            busname,
            busnumber,
            price,
            savilable
        }
        axios.put(`http://localhost:8070/busrouter/update/${id}`,updateBusRouter).then(()=>{alert("Bus router update")
        setDeparturePlace("");
        setArrivalplace("");
        setDeparturetime("");
        setArrivaltime("");
        setBusname("");
        setBusnumber("");
        setPrice("");
        setAvilable("");
    
    }).catch((err)=>{alert(err)})




       }
    




    return(
        <div className="container">
    
        
          
            <form onSubmit={Update}>
                <div class="form-group">
                    <label for="departureplace">Departure Place</label>
                    <input type="text" class="form-control" id="departureplace"  placeholder="Enter deputer place" value={departureplace}  
                     onChange={(e)=>{
                        setDeparturePlace(e.target.value);
                     }}   />
        
                </div>
                <div class="form-group">
                    <label for="arrivalplace">Age</label>
                    <input type="text" class="form-control" id="arrivalplace"  placeholder="Enter arrival place" value={arrivalplace}
                    onChange={(e)=>{
                        setArrivalplace(e.target.value);
                     }}/>
        
                </div>
                <div class="form-group">
                     <label for="departuretime">Departure Time</label>
                     <input type="text" class="form-control" id="departuretime"  placeholder="Enter departure time" value={departuretime}
                     onChange={(e)=>{
                        setDeparturetime(e.target.value);
                     }}/>
        
                </div>
                <div class="form-group">
                    <label for="arrivaltime">Arrival Time</label>
                    <input type="text" class="form-control" id="arrivaltime"  placeholder="Enter arrival time" value={arrivaltime}  
                     onChange={(e)=>{
                        setArrivaltime(e.target.value);
                     }}   />
        
                </div>
                <div class="form-group">
                    <label for="busname">Bus Name</label>
                    <input type="text" class="form-control" id="busname"  placeholder="Enter Bus name" value={busname}
                    onChange={(e)=>{
                        setBusname(e.target.value);
                     }}/>
        
                </div>
                <div class="form-group">
                     <label for="busnumber">Bus Number</label>
                     <input type="text" class="form-control" id="busnumber"  placeholder="Enter Bus Number" value={busnumber}
                     onChange={(e)=>{
                        setBusnumber(e.target.value);
                     }}/>
        
                </div>
                <div class="form-group">
                     <label for="price">Fair</label>
                     <input type="text" class="form-control" id="price"  placeholder="Enter price" value={price}
                     onChange={(e)=>{
                        setPrice(e.target.value);
                     }}/>
        
                </div>

                <div class="form-group">
                     <label for="savilable">Seat Avilable</label>
                     <input type="text" class="form-control" id="savilable"  placeholder="Enter price" value={savilable}
                     onChange={(e)=>{
                        setAvilable(e.target.value);
                     }}/>
        
                </div>
      
                 <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    
    
    
    
           
    
    
    
    
    
    
    
            </div>   
    
        )
    
    
    




}

