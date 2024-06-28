import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Form, Button, Modal, ModalTitle } from 'react-bootstrap';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import "../../styles/buslist.css";

export default function AllFeedback() {
   const [feedbacks, setFeedback] = useState([]);

   useEffect(() => {
      function getFeedback() {
         axios.get("http://localhost:8070/feedback/")
            .then((res) => {
               setFeedback(res.data);
            })
            .catch((err) => {
               alert(err.message);
            });
      }
      getFeedback();
   }, []);

   return (
      <div className="container">
         {feedbacks.map((feedback, index) => (
            <div key={index}>
               <Form className='abc'>
                  <Form.Group className="mb-3" controlId="name">
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="name" placeholder="name@example.com" defaultValue={feedback.name} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="name@example.com" defaultValue={feedback.email} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                     <Form.Label>Feedback Message</Form.Label>
                     <Form.Control as="textarea" rows={3} defaultValue={feedback.message} />
                  </Form.Group>
               </Form>
            </div>
         ))}
      </div>
   );
}
