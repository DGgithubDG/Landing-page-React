import React from "react";
import { Card, CardGroup,Button } from "react-bootstrap";

const Container = () => {
    return (
      <CardGroup>
      <Card>

      <img className="card-img-top" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Card image cap"></img>
      <div className="card-body">
      <h5 className="text-center">Card title</h5>
      <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Button variant="primary justify-content: center">Go somewhere</Button>      </div>
</Card>

<Card>

      <img className="card-img-top" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Card image cap"></img>
      <div className="card-body">
      <h5 className="text-center">Card title</h5>
        <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
</Card>

<Card>

      <img className="card-img-top" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="text-center">Card title</h5>
        <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>      </div>
</Card>

<Card>

      <img className="card-img-top" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Card image cap"></img>
      <div className="card-body">
      <h5 className="text-center">Card title</h5>
      <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className="btn btn-primary">Go somewhere</a>
      </div>
</Card>

</CardGroup>





        

    
	);
};



export default Container;
