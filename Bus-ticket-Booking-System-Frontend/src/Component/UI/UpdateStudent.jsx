
import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateStudent(){


    const{id}=useParams()
    const[name,setName]=useState()
    const[age,setAge]=useState()
    const[gender,setGender]=useState()

    const[students,setStudents]=useState([]);
    const navigate=useNavigate()


    useEffect(()=>{
        
            axios.get(`http://localhost:8070/student/get/${id}`)
            .then((res)=>{
                console.log(res)
                setName(res.data.student.name)
                setAge(res.data.student.age)
                setGender(res.data.student.gender)
                
            }).catch((err)=>{
                alert(err.message);
            })
            
            
        
       
       },[])


       const Update=(e)=>{
        e.preventDefault()

        const updateStudent={
            name,
            age,
            gender
        }
        axios.put(`http://localhost:8070/student/update/${id}`,updateStudent).then(()=>{alert("student update")
        setName("");
        setAge("");
        setGender("");
    
    }).catch((err)=>{alert(err)})




       }
    




    return(
        <div className="container">
    
        
          
            <form onSubmit={Update}>
                <div class="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" class="form-control" id="name"  placeholder="Enter student name" value={name}  
                     onChange={(e)=>{
                        setName(e.target.value);
                     }}   />
        
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age"  placeholder="Enter student Age" value={age}
                    onChange={(e)=>{
                        setAge(e.target.value);
                     }}/>
        
                </div>
                <div class="form-group">
                     <label for="gender">Student Gender</label>
                     <input type="text" class="form-control" id="gender"  placeholder="Enter student gender" value={gender}
                     onChange={(e)=>{
                        setGender(e.target.value);
                     }}/>
        
                </div>
      
                 <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    
    
    
    
           
    
    
    
    
    
    
    
            </div>   
    
        )
    
    
    




}

