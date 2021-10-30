import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Offer from "../Offer/Offer";


const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <>
    
    <div className="text-center mt-5 pt-5">
      <h5 className="orange">Our Offer</h5>
      <h2>We are Offering </h2>
     
    </div>
    <Container>
      <Row xs={12} md={4} className="g-5 mt-2" >
        {offers.map((offer) => (
          <Offer key={offer._id} offer={offer}></Offer>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Offers;
