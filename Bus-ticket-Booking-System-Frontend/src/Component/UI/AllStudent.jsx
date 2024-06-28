import React,{useState,useEffect,handleSearch} from 'react';
import axios from "axios";
import "../../styles/buslist.css";

import{Button,Modal, ModalTitle} from 'react-bootstrap'
import{faTrash} from "@fortawesome/free-solid-svg-icons";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import{Link, link} from "react-router-dom";



export default function AllStudent()
{
   const[students,setStudents]=useState([]);


  




   



   /*const [RowData, SetRowData] = useState([])
   const [ViewShow, SetViewShow] = useState(false)
   const handleViewShow = () => { SetViewShow(true) }
   const hanldeViewClose = () => { SetViewShow(false) }


   //FOr Edit Model
   const [ViewEdit, SetEditShow] = useState(false)
   const handleEditShow = () => { SetEditShow(true) }
   const hanldeEditClose = () => { SetEditShow(false) }
   //FOr Delete Model
   const [ViewDelete, SetDeleteShow] = useState(false)
   const handleDeleteShow = () => { SetDeleteShow(true) }
   const hanldeDeleteClose = () => { SetDeleteShow(false) }


   const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [gender, setgender] = useState("")


    const [Delete,setDelete] = useState(false)


   const [id,setId] = useState("");


   


   const handleEdit = () =>{
    const url = `http://localhost:8000/studeent/$[id]`
    const Credentials = { name, age,gender}
    axios.put(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
}


const handleDelete = () =>{
    const url = `http://localhost:8000/employee/${id}`
    axios.delete(url)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })







}

const searchRecords = (name) =>
    {
    
        axios.get(`http://localhost:8070/student/search/${name}`)
        .then(response => {
          setRecord(response.data);
        });
    }
<div class="input-group mb-4 mt-3">
          <div class="form-outline">
           <input type="text" id="form1" onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="Search Employee Here" style={{backgroundColor:"#ececec"}}/>
        </div>
        <button type="button" onClick={searchRecords}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        </div> 





*/





   


useEffect(()=>{
    function getStudent(){
        axios.get("http://localhost:8070/student/").then((res)=>{
            setStudents(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
        
        
    }
    getStudent();
   },[])

   const handleDelete=(id)=>{
    axios.delete(`http://localhost:8070/student/delete/${id}`)
    .then(res=>{console.log(res)
     window.location.reload()})
     .catch(err=>console.log(err))
   }


  
   
   


   




   

  
   
   
    return(
        <div className="container">


           <table className="table">
                <thead>
                    <tr>
                         <th scope="col">Name</th>
                         <th scope="col">Age</th>
                         <th scope="col">Gender</th>
                         <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => {
                            return( <tr>
                                  <td>{student.name}</td>
                                  <td>{student.age}</td>
                                  <td>{student.gender}</td>
                                  <td>
                                    <Link to={`/update/${student._id}`} className='btn btn-success'  >Update</Link>
                                    <button className='btn btn-danger' onClick={(e)=>handleDelete(student._id)}>Delete</button>
                                  </td>

                                  
                               </tr>);
                         })
                    }
                </tbody>
            </table>

           
           


            
        



        </div>

        







    )
}