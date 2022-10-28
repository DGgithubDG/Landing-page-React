import React from "react";

//include images into your bundle


//create your first component

import Jumbo from "./Jumbotron.jsx";
import Container from "./Container.jsx";


const Home = () => {
    return (
        <div className="Home">

            <Jumbo/>
<Container/>

        </div>
    
	);
};
export default Home;
