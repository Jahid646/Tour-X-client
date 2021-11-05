import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container className=" mt-5 pt-5 pb-5 mb-5">
        <Row>
          <Col md={6} xs={12} className="text-center mt-5 pt-5">
            <div>
              <img
                className="img-fluid"
                height="350"
                src="https://www.tourx-react.egenslab.com/static/media/about-1.bcfbc984.png"
                alt=""
              />
            </div>
          </Col>
          <Col  md={6} xs={12}className=" mt-5 pt-5">
            <div>
              <div className="text-center">
                <h3>
                  About<span className="orange"> Tour-X</span>
                </h3>
                <h1>The Best Travel Agency Company.</h1>
              </div>
              <p>
              Tour-X is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services. We are here to bring the luxury to your traveling. Safe traveling, your security, and your enjoyment are our main focus during your travels.
              <br/> Our experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our success and Tour-X will do anything to keep you smiling.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default About;