import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SeatView(props) {
  const [busrouter, setBusRouter] = useState({});
  const [reservedSeats, setReservedSeats] = useState([]);
  const [busrouters, setBusRouters] = useState([]);
  
  const busRouterId = props.match?.params?.id;

  // ... Other state variables for passenger details

  useEffect(() => {
    const busRouterId = props.match.params.id;
    axios.get(`http://localhost:8070/busrouter/get/${busRouterId}`)
      .then((res) => {
        setBusRouter(res.data.busrouter);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.match.params.id]);

  // Handle seat selection, passenger details, and form submission

  return (
    <div>



<table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th className="table-secondary" scope="col">Departure Place</th>
            <th className="table-secondary" scope="col">Arrival Place</th>
            <th className="table-secondary" scope="col">Departure Time</th>
            <th className="table-secondary" scope="col">Arrival Time</th>
            <th className="table-secondary" scope="col">Bus Name</th>
            <th className="table-secondary" scope="col">Bus Number</th>
            <th className="table-secondary" scope="col">Fair</th>
            <th className="table-secondary" scope="col">Seat Available</th>
          </tr>
        </thead>
        <tbody>
          {busrouters.map((busrouter) => (
            <tr key={busrouter._id}>
              <td className="table-success">{busrouter.departureplace}</td>
              <td className="table-info">{busrouter.arrivalplace}</td>
              <td className="table-success">{busrouter.departuretime}</td>
              <td className="table-info">{busrouter.arrivaltime}</td>
              <td className="table-success">{busrouter.busname}</td>
              <td className="table-info">{busrouter.busnumber}</td>
              <td className="table-success">{busrouter.price}</td>
              
              <td className="table-info">{busrouter.savilable}</td>

              
            </tr>
          ))}
        </tbody>
      </table>



      {/* Display bus router details and seat selection interface */}
    </div>
  );
}

export default SeatView;
