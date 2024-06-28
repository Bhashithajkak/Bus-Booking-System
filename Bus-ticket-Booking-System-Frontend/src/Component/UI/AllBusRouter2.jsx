import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import '../../styles/buslist.css';
import { Form, FormGroup } from 'reactstrap';

export default function AllBusRouter2() {
  const [busrouters, setBusRouters] = useState([]);
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');

  useEffect(() => {
    function getBusRouter() {
      axios.get('http://localhost:8070/busrouter/').then((res) => {
        setBusRouters(res.data);
      }).catch((err) => {
        alert(err.message);
      });
    }
    getBusRouter();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8070/busrouter/delete/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  const handleSearch = () => {
    // Filter the bus routes based on "From" and "To" places
    const filteredRoutes = busrouters.filter((busrouter) =>
      busrouter.departureplace.toLowerCase() === fromPlace.toLowerCase() &&
      busrouter.arrivalplace.toLowerCase() === toPlace.toLowerCase()
    );
    setBusRouters(filteredRoutes);
  }

  return (
    <div className="container">
      <Form className="form">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>From</h6>
              <input
                type="text"
                placeholder="Start point"
                value={fromPlace}
                onChange={(e) => setFromPlace(e.target.value)}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>To</h6>
              <input
                type="text"
                placeholder="End point"
                value={toPlace}
                onChange={(e) => setToPlace(e.target.value)}
              />
            </div>
          </FormGroup>


          <FormGroup className="d-flex gap-3 form__group">
            <span>
            <i class="ri-calendar-line"></i>
                
            </span>
            <div>
                <h6>Router Date</h6>
                <input type="date" placeholder="Journey date"  />
            </div>
          
        </FormGroup>


          <span className="search__icon" onClick={handleSearch}>
            <i className="ri-search-line"></i>
          </span>
        </div>
      </Form>

      <br />

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
    </div>
  );
}
