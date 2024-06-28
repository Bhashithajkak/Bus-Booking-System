import axios from "axios";
import{link} from "react-router-dom";
import React,{useState} from "react"
export default function AddFeedBack()
{

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[message,setmessage]=useState("");
   




   


    


    function sendData(e){
        e.preventDefault();

        const newStudent={
            name,
            email,
            phone,
            message,
           
           
        }
        axios.post("http://localhost:8070/feedback/add",newStudent).then(()=>{alert("feed back added")
        setName("");
        setEmail("");
        setPhone("");
        setmessage("");
      
    
    }).catch((err)=>{alert(err)})
    }



    







    return(
    <div className="container">

    
      
        <form onSubmit={sendData}>
            
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name"  placeholder="Type your Name"  
                 onChange={(e)=>{
                    setName(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email"  placeholder="type your email"  
                 onChange={(e)=>{
                    setEmail(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="phone">Phone number</label>
                <input type="text" class="form-control" id="phone"  placeholder="Type your phone number"
                onChange={(e)=>{
                    setPhone(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for="message">Message</label>
                 <input type="text" class="form-control" id="message"  placeholder="type your feedback"
                 onChange={(e)=>{
                    setmessage(e.target.value);
                 }}/>
    
            </div>
           
            
  
             <button type="submit" class="btn btn-primary">SEND</button>
        </form>




       







        </div>   

    )



 }