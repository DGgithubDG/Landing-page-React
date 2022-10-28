import React from "react";

//include images into your bundle


//create your first component

import Jumbo from "./Jumbotron.jsx";
import Container from "./Container.jsx";
import NavBar from "./NavBar.jsx";
import Foot from "./Foot.jsx";




const Home = () => {
    return (
        <div className="Home">
<NavBar/>
            <Jumbo/>
<Container/>
<Foot/>

        </div>
    
	);
};
export default Home;
