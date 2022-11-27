import React from "react";
import { Button } from "react-bootstrap";



const Jumbo = () => {
    return (
       // i rremoved the container fluid but im not sure if this is what you meant.
      <div class="bg-light mb-3 p-5 ">
      
      <div class="container py-5">
        <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
        <p class="col-md-8 fs-3">
        Dogs are considered by many to be man’s best friend, and a lot of us love to wonder about exactly what our loyal and energetic companions are thinking or what they would say to us if they were talking animals. The Texts From Dog Tumblr offers answers to these questions with a modern twist – as the name suggests, the blog is all about the imaginary SMS exchange between a talking dog and his owner.        </p>
        <button class="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>


    
    );
};



export default Jumbo;