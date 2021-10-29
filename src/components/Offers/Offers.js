import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Offer from "../Offer/Offer";


const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("offers.json")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <>
    <div className="text-center mt-5 pt-5">
      <h2>Awesome <span className="text-info">Services</span> </h2>
      <p>Medicinal Service Company puts stock in conveying the most elevated quality administration with quality and sympathy every day.</p>
    </div>
    <Container>
      <Row xs={12} md={4} className="g-5 mt-2" >
        {offers.map((offer) => (
          <Offer key={offer.key} package={offer}></Offer>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Offers;
