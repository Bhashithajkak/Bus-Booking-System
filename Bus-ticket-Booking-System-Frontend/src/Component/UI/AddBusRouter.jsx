import axios from "axios";
import{link} from "react-router-dom";
import React,{useState} from "react"
export default function Addbusrouter()
{

    const[departureplace,setDepartureplace]=useState("");
    const[arrivalplace,setArrivalplace]=useState("");
    const[departuretime,setDeparturetime]=useState("");
    const[age,setAge]=useState("");
    const[arrivaltime,setArrivaltime]=useState("");
    const[busname,setBusname]=useState("");
    const[busnumber,setBusnumber]=useState("");
    const[price,setPrice]=useState("");
    const[savilable,setAvilable]=useState("");




   


    


    function sendData(e){
        e.preventDefault();

        const newStudent={
            departureplace,
            arrivalplace,
            departuretime,
            arrivaltime,
            busname,
            busnumber,
            price,
            savilable
           
        }
        axios.post("http://localhost:8070/busrouter/add",newStudent).then(()=>{alert("bus router added")
        setDepartureplace("");
        setArrivalplace("");
        setDeparturetime("");
        setArrivaltime("");
        setBusname("");
        setBusnumber("");
        setPrice(" ");
        setAvilable("");
    
    }).catch((err)=>{alert(err)})
    }



    







    return(
    <div className="container">

    
      
        <form onSubmit={sendData}>
            <div class="form-group">
                <label for="departureplace">Departure Place</label>
                <input type="text" class="form-control" id="departureplace"  placeholder="Enter student name"  
                 onChange={(e)=>{
                    setDepartureplace(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="arrivalplace">Arrival Place</label>
                <input type="text" class="form-control" id="arrivalplace"  placeholder="Enter student name"  
                 onChange={(e)=>{
                    setArrivalplace(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="departuretime">Departure Time</label>
                <input type="text" class="form-control" id="departuretime"  placeholder="Enter student Age"
                onChange={(e)=>{
                    setDeparturetime(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for="arrivaltime">Arrival Time</label>
                 <input type="text" class="form-control" id="arrivaltime"  placeholder="Enter student gender"
                 onChange={(e)=>{
                    setArrivaltime(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for=" busname">Buss Name</label>
                 <input type="text" class="form-control" id=" busname"  placeholder="Enter student gender"
                 onChange={(e)=>{
                    setBusname(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for=" busnumber">Buss Number</label>
                 <input type="text" class="form-control" id=" busnumber"  placeholder="Enter student gender"
                 onChange={(e)=>{
                    setBusnumber(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for="price">Price</label>
                 <input type="text" class="form-control" id=" price"  placeholder="Enter student gender"
                 onChange={(e)=>{
                    setPrice(e.target.value);
                 }}/>
    
            </div>

            <div class="form-group">
                 <label for="savilable">seat Avilable</label>
                 <input type="text" class="form-control" id=" savilable"  placeholder="Enter student gender"
                 onChange={(e)=>{
                    setAvilable(e.target.value);
                 }}/>
    
            </div>
  
             <button type="submit" class="btn btn-primary">Submit</button>
        </form>




       







        </div>   

    )



    







}
