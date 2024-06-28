import React,{useRef} from "react";
import "../../styles/find-router-form.css";
import "../../styles/find-router-form.css";
import { Form, FormGroup } from "reactstrap";

const FindRouter = () => {

    const fromRef=useRef('')
    const toRef=useRef(0)
    const dateRef=useRef(0)

    const searchHandler =()=>{
        const from=fromRef.current.value
        const to=toRef.current.value
        const date=dateRef.current.value

        if(from==''|| to=='' || date=='')
        {
            return alert('All fields are required!');
        }
    };



  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
                <i class="ri-map-pin-line"></i>
                
            </span>
            <div>
                <h6>From</h6>
                <input type="text" placeholder="Start point" ref={fromRef} />
            </div>
          
        </FormGroup>

        <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
                <i class="ri-map-pin-line"></i>
                
            </span>
            <div>
                <h6>To</h6>
                <input type="text" placeholder="end point" ref={toRef}  />
            </div>
          
        </FormGroup>

        <FormGroup className="d-flex gap-3 form__group">
            <span>
            <i class="ri-calendar-line"></i>
                
            </span>
            <div>
                <h6>Router Date</h6>
                <input type="date" placeholder="Journey date" ref={dateRef} />
            </div>
          
        </FormGroup>


        <span className="search__icon" type="submit" onClick={searchHandler}>
        <i class="ri-search-line"></i>
        </span>

       
        
        

        
      </div>
    </Form>
  );
};

export default FindRouter;