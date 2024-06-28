
import Helmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/CommonSection";
import AllBusRouter from "../Component/UI/AllBusRouter";
import FindRouter from "../Component/UI/FindRouter";
import React, { useState ,useEffect} from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import "../styles/Tab.css";
import "../styles/boking.css";
import { Container, Row, Col } from "reactstrap";
import Addstudent from "../Component/UI/AddStudent";
import AddBooking from "../Component/UI/AddBooking";
import AllBooking from "../Component/UI/AllBooking";


import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const Boking=()=>{




    const{id}=useParams()
    const[departureplace,setDeparturePlace]=useState()
    const[arrivalplace,setArrivalplace]=useState()
    const[departuretime,setDeparturetime]=useState()
    const[arrivaltime,setArrivaltime]=useState()
    const[busname,setBusname]=useState()
   
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




   


    


    const sendData=(e)=>{
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
        axios.post("http://localhost:8070/bookingdetail/add",newStudent).then((response)=>{alert("booking added");
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
    
    }).catch((error)=>{alert("error adding booking:" + error.message)});
    }






       
    




   


    const [name1, setName1] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender1, setGender1] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber1, setSeatnumber1] = useState([])
    // const [passengers, setPassengers] = useState([])
    // useEffect(()=>{
    //     let bId = localStorage.getItem('selectedBusId')
    //     if(bId){
    //         getSeatArray(bId)            
    //     }
    //     else return
    // },[localStorage])
    // const getSeatArray = async bId => {
    //     const baseURL = "http://localhost:8080/booking/"
    //     await axios.get(baseURL, bId)
    //     .this(response=>response.data)
    //     .this(data=>{
    //         setReservedSeat(data)
    //         console.log(reservedSeat)
    //     })
    // }
    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber1)
        let newSeat = e.target.value
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true
            if (seatNumber1.includes(newSeat)) {
                setSeatnumber1(seatNumber1.filter(seat => seat !== newSeat))
            }
        } else {
            setSeatnumber1([...seatNumber1, newSeat])
            setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber1)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender1(gender1.concat(value))
        // console.log(value)
        // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName1("name is required"))
        } else {
            setName1(name1.concat(value))
            // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        setArrowDown(true)
        localStorage.setItem("reservedSeats", JSON.stringify(seatNumber1))
        localStorage.setItem("nameData", JSON.stringify(name1))
        console.log(name1)
        console.log(gender1)
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <form key={idx} className="form seatfrm">
                    <p class="text-capitalize text-center">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" autoComplete="off" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    </div>
                </form>)

        })
    }
    return(




        





















        <Helmet title="Boking">


            
           










            <CommonSection title="Reserve seats as per your choice"/>

            <Col lg="12" className="mb-4 text-center">
              
              <h4 className="section__title">Router Details</h4>
            </Col>



            <div className="container2">
    
        
          
    <form onSubmit={Update}>
        <div class="form-group1">
            <label for="departureplace">Departure Place   :</label>
            <input type="text" class="form-control1" id="departureplace"  placeholder="Enter deputer place" value={departureplace}  
                />

        </div>
        <div class="form-group1">
            <label for="arrivalplace">Arrival Place :</label>
            <input type="text" class="form-control1" id="arrivalplace"  placeholder="Enter arrival place" value={arrivalplace}
            />

        </div>
        <div class="form-group1">
             <label for="departuretime">Departure Time :</label>
             <input type="text" class="form-control1" id="departuretime"  placeholder="Enter departure time" value={departuretime}
            />

        </div>
        <div class="form-group1">
            <label for="arrivaltime">Arrival Time :</label>
            <input type="text" class="form-control1" id="arrivaltime"  placeholder="Enter arrival time" value={arrivaltime}  
              />

        </div>
        <div class="form-group1">
            <label for="busname">Bus Name :</label>
            <input type="text" class="form-control1" id="busname"  placeholder="Enter Bus name" value={busname}
           />

        </div>
        <div class="form-group1">
             <label for="busnumber">Bus Number :</label>
             <input type="text" class="form-control1" id="busnumber"  placeholder="Enter Bus Number" value={busnumber}
            />

        </div>
        <div class="form-group1">
             <label for="price">Fair:</label>
             <input type="text" class="form-control1" id="price"  placeholder="Enter price" value={price}
            />

        </div>

        
         
    </form>




   







    </div>   









            
                
                <section>
                <div className="ss">
                <h6>Click on Sheat to Select or deselect</h6>
            <div className="row">
                <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox"  value="1A" id="1A" />
                                            <label htmlFor="1A">1A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1B" value="1B" />
                                            <label htmlFor="1B">1B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="1C" id="1C" />
                                            <label htmlFor="1C">1C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="1D" id="1D" />
                                            <label htmlFor="1D">1D</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2A" id="2A" />
                                            <label htmlFor="2A">2A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2B" id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="2C" id="2C" />
                                            <label htmlFor="2C">2C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="2D" id="2D" />
                                            <label htmlFor="2D">2D</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="3A" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="3B" id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3C" id="3C" />
                                            <label htmlFor="3C">3C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3D" id="3D" />
                                            <label htmlFor="3D">3D</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="4A" id="4A" />
                                            <label htmlFor="4A">4A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4B" id="4B" />
                                            <label htmlFor="4B">4B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4C" id="4C" />
                                            <label htmlFor="4C">4C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4D" id="4D" />
                                            <label htmlFor="4D">4D</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">5A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="5C" id="5C" />
                                            <label htmlFor="5C">5C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="5D" id="5D" />
                                            <label htmlFor="5D">5D</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="6A" id="6A" />
                                            <label htmlFor="6A">6A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6B" id="6B" />
                                            <label htmlFor="6B">6B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6C" id="6C" />
                                            <label htmlFor="6C">6C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6D" id="6D" />
                                            <label htmlFor="6D">6D</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="7A" id="7A" />
                                            <label htmlFor="7A">7A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7B" id="7B" />
                                            <label htmlFor="7B">7B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7C" id="7C" />
                                            <label htmlFor="7C">7C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7D" id="7D" />
                                            <label htmlFor="7D">7D</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="8A" id="8A" />
                                            <label htmlFor="8A">8A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="8B" id="8B" />
                                            <label htmlFor="8B">8B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="8C" id="8C" />
                                            <label htmlFor="8C">8C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="8D" id="8D" />
                                            <label htmlFor="8D">8D</label>
                                        </li>

                                    </ol>
                                </li>
                               
                               
                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2">
                    <div className="seatInfo">
                        
                       
                        
                    </div>
                </div>
            </div>

        </div>


                </section>
                <section>

                <Col lg="12" className="mb-4 text-center">
              
              <h4 className="section__title">Booking Details</h4>
            </Col>
        
                </section>

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
        <label for="arrivaltime">Depute Time</label>
        <input type="text" class="form-control" id="arrivaltime"  placeholder="Enter dtime" value={departuretime} 
       onChange={(e)=>{
        setDtime(e.target.value);
     }}  />

    </div>
    <div class="form-group">
        <label for="atime">Arivall time</label>
        <input type="text" class="form-control" id="atime"  placeholder="Enter Atime"  value={arrivaltime}
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
         <input type="text" class="form-control" id="from"  placeholder="Enter start place"  value={departureplace} 
         onChange={(e)=>{
            setFrom(e.target.value);
         }}/>

    </div>
    <div class="form-group">
         <label for=" to">TO</label>
         <input type="text" class="form-control" id=" to"  placeholder="Enter end plase"  value={arrivalplace}
         onChange={(e)=>{
            setTO(e.target.value);
         }}/>

    </div>
    <div class="form-group">
         <label for=" busnumber">Buss Number</label>
         <input type="text" class="form-control" id=" busnumber"  placeholder="Enter student busnumber" value={busnumber}
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

               
                
       
    

        


            
           

            
            
        </Helmet>
    );
};
export default Boking;