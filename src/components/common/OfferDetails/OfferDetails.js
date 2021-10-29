import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';


// This is Private route 
const OfferDetails = () => {
    const { id } = useParams();
  const [singleOffer, setSingleOffer] = useState({});
  const { name, img, price, description } = singleOffer;
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Jahid646/user-json-files/main/offers.json")
      .then((res) => res.json())
      .then((data) =>
        setSingleOffer(data.find((offe) => offe.id === parseInt(id)))
      );
  }, [id]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const u= JSON.stringify(localStorage.getItem('user'))

    return (
        <>
        <Container className="py-5">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card className="shadow border-0 p-3">
              <Row>
                <Col xs={12} md={6}>
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text className="fs-1 orange fw-bold">
                      $ <span id="">{price}</span>
                    </Card.Text>
                    <div className="">
                      <div className="d-flex justify-content-start align-items-center">
                       <Button onClick={handleShow} variant="outline-success orange"> Procceed</Button>
                      </div>
                    </div>
                  
                  </Card.Body>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Img src={img} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>

      {/* Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks For Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will contact you soon.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};

export default OfferDetails;