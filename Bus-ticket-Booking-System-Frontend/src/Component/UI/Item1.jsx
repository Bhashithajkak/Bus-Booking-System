import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/item1.css";

const Item1 = (props) => {
  const { imgUrl, Name } = props.item;

  return (
    <Col lg="4" md="4" sm="2" className="mb-5 center">
      <div className="f__item">
        <div className="f__img">
          <img src={imgUrl} alt="f__img" className="w-100" />
        </div>

        
      </div>

      <div className="f__item-content mt-4">
          <h6 className="section__title text-center">{Name}</h6>
         


         
        </div>
    </Col>
  );
};

export default Item1;