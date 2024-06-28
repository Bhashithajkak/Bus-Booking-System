import axios from "axios";
import{link} from "react-router-dom";
import React,{useState} from "react"
export default function Addstudent()
{

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");



   


    


    function sendData(e){
        e.preventDefault();

        const newStudent={
            name,
            age,
            gender
        }
        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{alert("student added")
        setName("");
        setAge("");
        setGender("");
    
    }).catch((err)=>{alert(err)})
    }



    







    return(
    <div className="container">

    
      
        <form onSubmit={sendData}>
            <div class="form-group">
                <label for="name">Student Name</label>
                <input type="text" class="form-control" id="name"  placeholder="Enter student name"  
                 onChange={(e)=>{
                    setName(e.target.value);
                 }}   />
    
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="text" class="form-control" id="age"  placeholder="Enter student Age"
                onChange={(e)=>{
                    setAge(e.target.value);
                 }}/>
    
            </div>
            <div class="form-group">
                 <label for="gender">Student Gender</label>
                 <input type="text" class="form-control" id="gender"  placeholder="Enter student gender"
                 onChange={(e)=>{
                    setGender(e.target.value);
                 }}/>
    
            </div>
  
             <button type="submit" class="btn btn-primary">Submit</button>
        </form>




       







        </div>   

    )



    







}
