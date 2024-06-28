import axios from "axios";
import{link} from "react-router-dom";
import React,{useState} from "react"
import "../../styles/boking.css"
export default function AddBooking()
{

    const[name,setName]=useState("");
    const[gender,setGender]=useState("");
    const[dtime,setDtime]=useState("");
    const[atime,setAtime]=useState("");
    const[journeydate,setJourneydate]=useState("");
    
    const[from,setFrom]=useState("");
    const[to,setTO]=useState("");
    const[busnumber,setBusnumber]=useState("");
    const[tnumber,setTnumber]=useState("");
    const[seatnumer,setSeatnumber]=useState("");




   


    


    function sendData(e){
        e.preventDefault();

        const newStudent={
            name,
            gender,
            dtime,
            atime,
            journeydate,
            from,
            to,
            busnumber,
            tnumber,
            seatnumer
           
        }
        axios.post("http://localhost:8070/bookingdetail/add",newStudent).then(()=>{alert("booking added")
        setName("");
        setGender("");
        setDtime("");
        setAtime("");
        setJourneydate("");
        setFrom("");
        setTO("");
        setBusnumber("");
        setTnumber("");
        setSeatnumber("");
    
    }).catch((err)=>{alert(err)})
    }



    







    return(
    <div className="container">

    
      
        <form onSubmit={sendData}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name"  placeholder="Enter name"  
                 onChange={(e)=>{
                    setName(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" class="form-control" id="gender"  placeholder="Enter Gender"  
                 onChange={(e)=>{
                    setGender(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="dtime">Depute Time</label>
                <input type="text" class="form-control" id="dtime"  placeholder="Enter dtime"  
                 onChange={(e)=>{
                    setDtime(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="atime">Arivall time</label>
                <input type="text" class="form-control" id="atime"  placeholder="Enter Atime"  
                 onChange={(e)=>{
                    setAtime(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="journeydate">Journey date</label>
                <input type="text" class="form-control" id="journeydate"  placeholder="Enter journeydate"
                onChange={(e)=>{
                    setJourneydate(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for="from">FROM</label>
                 <input type="text" class="form-control" id="from"  placeholder="Enter start place"
                 onChange={(e)=>{
                    setFrom(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for=" to">TO</label>
                 <input type="text" class="form-control" id=" to"  placeholder="Enter end plase"
                 onChange={(e)=>{
                    setTO(e.target.value);
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
                 <label for="tnumber">Mobile Number</label>
                 <input type="text" class="form-control" id="tnumber"  placeholder="Enter Mobile number"
                 onChange={(e)=>{
                    setTnumber(e.target.value);
                 }}/>
    
            </div>

            <div class="form-group">
                 <label for="seatnumer">Seat number</label>
                 <input type="text" class="form-control" id="seatnumer"  placeholder="Enter Sheart Number"
                 onChange={(e)=>{
                    setSeatnumber(e.target.value);
                 }}/>
    
            </div>


  
             <button type="submit" class="btn btn-primary">BOOKING NOW</button>
        </form>




       







        </div>   

    )



    







}
