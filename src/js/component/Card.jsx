import React from "react";
import { Card, Col, CardGroup,Button } from "react-bootstrap";
import { PropTypes } from "prop-types";


const Card1 = (props) => {
    return (
      //<div className="Contained">
      <Col lg="3">
      <Card>

      <img className="card-img-top" src={props.img} alt="Card image cap"></img>
      <div className="card-body">
      <h5 className="text-center">{props.title}</h5>
      <p className="text-center">{props.description}</p>
      <Button variant="primary justify-content: text-center">Go somewhere</Button>      </div>
</Card>
</Col>
//</div>

    
	);
};



export default Card1;
