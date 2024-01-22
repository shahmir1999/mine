import React from "react";



function Slider(){
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.w3schools.com/bootstrap/la.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>It's cheap,faster and the New way to shop.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?cs=srgb&dl=pexels-spencer-selover-428340.jpg&fm=jpg&_gl=1*zylrnp*_ga*MTQyMDY2OTYxMi4xNjY4NzI1NzM0*_ga_8JE65Q40S6*MTY2ODcyNTczNi4xLjEuMTY2ODcyNTc1MC4wLjAuMA.." class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Summer Arrival</h5>
              <p>Explore your Fashion Sense</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.squarespace-cdn.com/content/v1/5490622ce4b0001a56bba394/1604247657000-SESIB2HG7644MZ68EKVC/IMG_9535.jpg?format=2500w" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              

              
              
            </div>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
)
    }
    export default Slider;