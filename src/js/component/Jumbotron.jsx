import React from "react";
import { Button } from "react-bootstrap";



const Jumbo = () => {
    return (
       
      <div className="bg-light mb-3 p-5">
        <div className="container-fluid py-5">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="btn btn-primary">Learn more</Button>
        </p>
      </div>
      </div>


    
    );
};



export default Jumbo;