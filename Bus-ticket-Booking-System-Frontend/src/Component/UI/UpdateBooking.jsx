import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateBooking(){


    const{id}=useParams()
   

    



    const[name,setName]=useState("")
    const[gender,setGender]=useState("")
    const[dtime,setDtime]=useState("")
    const[atime,setAtime]=useState("")
    const[journeydate,setJourneydate]=useState("")
    
    const[from,setFrom]=useState("")
    const[to,setTO]=useState("")
    const[busnumber,setBusnumber]=useState("")
    const[tnumber,setTnumber]=useState("")
    const[seatnumer,setSeatnumber]=useState("")


    const[bookingdetails,setBookingDetails]=useState([]);
    const navigate=useNavigate()


    useEffect(()=>{
        
            axios.get(`http://localhost:8070/bookingdetail/get/${id}`)
            .then((res)=>{
                console.log(res)
                setName(res.data.bookingdetail.name)
                setGender(res.data.bookingdetail.gender)
                setDtime(res.data.bookingdetail.dtime)
                setAtime(res.data.bookingdetail,atime)
                setJourneydate(res.data.bookingdetail.journeydate)
                setFrom(res.data.bookingdetail.from)
                setTO(res.data.bookingdetail.to)
                setBusnumber(res.data.bookingdetail.busnumber)
                setTnumber(res.data.bookingdetail.tnumber)
                setSeatnumber(res.data.bookingdetail.seatnumer)
                
            }).catch((err)=>{
                alert(err.message);
            })
            
            
        
       
       },[])


       const Update=(e)=>{
        e.preventDefault()

        const updateBookingDetail={
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
        axios.put(`http://localhost:8070/bookingdetail/update/${id}`,updateBookingDetail).then(()=>{alert("Bus router update")
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
    
        
          
            <form onSubmit={Update}>


            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name"  placeholder="Enter name"  value={name} 
                 onChange={(e)=>{
                    setName(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" class="form-control" id="gender"  placeholder="Enter Gender"  value={gender} 
                 onChange={(e)=>{
                    setGender(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="dtime">Depute Time</label>
                <input type="text" class="form-control" id="dtime"  placeholder="Enter dtime"  value={dtime} 
                 onChange={(e)=>{
                    setDtime(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="atime">Arivall time</label>
                <input type="text" class="form-control" id="atime"  placeholder="Enter Atime"  value={atime} 
                 onChange={(e)=>{
                    setAtime(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="journeydate">Journey date</label>
                <input type="text" class="form-control" id="journeydate"  placeholder="Enter journeydate" value={journeydate} 
                onChange={(e)=>{
                    setJourneydate(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for="from">FROM</label>
                 <input type="text" class="form-control" id="from"  placeholder="Enter start place" value={from} 
                 onChange={(e)=>{
                    setFrom(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for=" to">TO</label>
                 <input type="text" class="form-control" id=" to"  placeholder="Enter end plase"  value={to} 
                 onChange={(e)=>{
                    setTO(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for=" busnumber">Buss Number</label>
                 <input type="text" class="form-control" id=" busnumber"  placeholder="Enter sbus number" value={busnumber}
                 onChange={(e)=>{
                    setBusnumber(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for="tnumber">Mobile Number</label>
                 <input type="text" class="form-control" id="tnumber"  placeholder="Enter Mobile number" value={tnumber}
                 onChange={(e)=>{
                    setTnumber(e.target.value);
                 }}/>
    
            </div>

            <div class="form-group">
                 <label for="seatnumer">Seat number</label>
                 <input type="text" class="form-control" id="seatnumer"  placeholder="Enter Sheart Number" value={seatnumer}
                 onChange={(e)=>{
                    setSeatnumber(e.target.value);
                 }}/>
    
            </div>


                











               
      
                 <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    
    
    
    
           
    
    
    
    
    
    
    
            </div>   
    
        )
    
    
    




}

