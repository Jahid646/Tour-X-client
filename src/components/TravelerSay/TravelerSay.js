import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const TravelerSay = () => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <div className="text-center">
                    <h5 className="orange">Our Traveller Say</h5>
                <h1>What Our Traveller Say About Us</h1>
                </div>
                
                <Row className="mt-5 pt-5">
                <Col xl={4} lg={4} md={6} sm={12}>
      <Card id="cardStyle" style={{ width: "18rem" }} className="h-100 mx-auto border shadow">
        <Card.Img variant="top" className="img-fluid" style={{  borderRadius:"50%" }} src="https://i.ibb.co/PrxsPbY/user1.png" />
        <Card.Body className="text-center">
          <Card.Title> <span className="orange">Alizabeth Turner</span> </Card.Title>
         
          <Card.Text style={{ textAlign: "justify" }}><em className="text-muted"> <i class="fas fa-quote-left"></i> Really very good experience with them!<i class="fas fa-quote-right p-2"></i>  </em></Card.Text>
        </Card.Body>
        
       
      </Card>
    </Col>

    <Col xl={4} lg={4} md={6} sm={12}>
      <Card id="cardStyle" style={{ width: "18rem" }} className="h-100 mx-auto border shadow">
        <Card.Img variant="top" style={{borderRadius:"50%" }} src="https://i.ibb.co/YcCZwhC/user2.png" />
        <Card.Body className="text-center">
          <Card.Title > <span className="orange">Zunayed Jomsher</span> </Card.Title>
         
          <Card.Text style={{ textAlign: "justify" }}><em className="text-muted"> <i class="fas fa-quote-left"></i> Very trustworthy service and Really enjoy it! <i class="fas fa-quote-right p-2"></i> </em></Card.Text>
          
        </Card.Body>
        
       
      </Card>
    </Col>

    <Col xl={4} lg={4} md={6} sm={12}>
      <Card id="cardStyle" style={{ width: "18rem",}} className="h-100 mx-auto border shadow">
        <Card.Img variant="top" style={{borderRadius:"50%" }} src="https://i.ibb.co/WVQ2gf7/user3.png" />
        <Card.Body className="text-center">
          <Card.Title><span className="orange">Captain Barbosa</span> </Card.Title>
          
          <Card.Text style={{ textAlign: "justify" }}><em className="text-muted"> <i class="fas fa-quote-left"></i> Their services and offers are so enjoyable!<i class="fas fa-quote-right p-2"></i>  </em></Card.Text>
          
        </Card.Body>
        
       
      </Card>
    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TravelerSay;