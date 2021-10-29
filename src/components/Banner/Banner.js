import React from "react";
import { Carousel, Container} from "react-bootstrap";
import './Banner.css'
const Banner = () => {
  return (
    <>

    
<Container fluid>
  <Carousel variant="">
              <Carousel.Item>
                <img
                
                  className="d-block w-100 img-fluid image"
                  
                  src="https://rs-insurance.co.uk/wp-content/uploads/2014/07/04-Worldwide-Travel-Cover.jpg"
                  alt="First slide"
                />
                <Carousel.Caption  className="bg">
                  <h1 className="">
                  A journey of a thousand miles begins with a single step
                  </h1>
                  
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                
                  className="d-block w-100 img-fluid image"
                 
                  src="https://www.travelinsurance.co.nz/assets/images/missed-flight-guide-tinz.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption  className="bg"> 
                <h1 className="">
                Do not follow where the path may lead. Go instead where there is no path and leave a trail
                  </h1>
                 
                </Carousel.Caption >
              </Carousel.Item>
              <Carousel.Item>
                <img
                
                  className="d-block w-100 img-fluid image"
                  
                  src="https://www.citylife2u.com/images/slider/slide-03.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg">
                <h1 className="">
                We take photos as a return ticket to a moment otherwise gone
                  </h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
</Container>
      
            
   
  
    </>
  );
};

export default Banner;
