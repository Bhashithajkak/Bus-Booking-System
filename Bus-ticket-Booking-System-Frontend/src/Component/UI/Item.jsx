import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/item.css";

const Item = (props) => {
  const { imgUrl, Name } = props.item;

  return (
    <Col lg="2" md="2" sm="3" className="mb-5">
      <div className="f__item">
        <div className="f__img">
          <img src={imgUrl} alt="f__img" className="w-100" />
        </div>

        
      </div>

      <div className="f__item-content mt-4">
          <h4 className="section__title text-center">{Name}</h4>
         


         
        </div>
    </Col>
  );
};

export default Item;