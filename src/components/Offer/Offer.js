import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Offer.css'
const Offer = (props) => {
  const { id, name, price, description, img } = props.offer;
  return (
    <Col xl={4} lg={4} md={6} sm={12}>
      <Card id="cardStyle" style={{ width: "18rem" }} className="h-100 mx-auto border shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
          <h5 className="text-dark fw-bold">$ {price}</h5>
        </Card.Body>
        <div className="mx-auto pb-2">
          <Link to={`/offer/${id}`}>
            <Button variant="outline-success orange">Booking Details</Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Offer;
