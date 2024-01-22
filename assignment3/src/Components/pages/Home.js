import React from "react";
import Slider from "../inc/Slider";
import {Link} from 'react-router-dom';


function Home(){
return (
    <div>
        <Slider/>
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-mid-12 text-center">
                    <h3 classNAme="main-heading">Axel Clothes</h3>
                    <div className="underline mx-auto"></div>
                    <p>
                        This is an E-commerce clothing line where you can buy clothing wear online.
                    </p>
                    <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                    </div>
            </div>
        </div>
        
    </section>
    </div>
);
}
export default Home;