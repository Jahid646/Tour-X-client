import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrdes = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{

        fetch(`http://localhost:5000/order/${user.uid}`)
        .then(res => res.json())
        .then(data => setMyOrders(data));
    }, [])

    const handleRemove =(id) =>{
        const process = window.confirm("Do You Want to Remove this Order?");
        if(process){
            fetch(`http://localhost:5000/order/${id}`,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Order Canceled Successfully');
                    const newOrders = myOrders.filter(order => order._id !== id);
                    setMyOrders(newOrders);
                    
                }
            });
        }
    };
    return (
        <div>
            <h2>my orders</h2> <hr/>
{
              myOrders.map(order => 
            <Container key={order._id} className="py-5">
        <Row>
          <Col  md={6} >
            <Card className="shadow border-0 p-3">
              <Row>
                <Col xs={12} md={6}>
                  <Card.Body>
                    <Card.Title>{order.offer.name}</Card.Title>
                    <Card.Text>{order.offer.description}</Card.Text>
                    <Card.Text className="fs-1 orange fw-bold">
                      $ <span id="">{order.offer.price}</span>
                    </Card.Text>
                    <Button variant="outline-danger" className="orange rounded-pill" onClick={ ()=> handleRemove(order._id)}>
                        Remove Order
                    </Button>
                  </Card.Body>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Img src={order.offer.img} />
                </Col>
              </Row>
            </Card>
          </Col>
           
            </Row>
        </Container>
              )
          }
        </div>
    );
};

export default MyOrdes;