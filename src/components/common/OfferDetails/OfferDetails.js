import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

// This is Private route
const OfferDetails = () => {
  const { id } = useParams();
  const [singleOffer, setSingleOffer] = useState({});
  const { name, img, price, description } = singleOffer;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(
      `https://frightening-witch-07508.herokuapp.com/offers/${id}`
    )
      .then((res) => res.json())
      .then((data) =>
        setSingleOffer(data)
      );
  }, []);


  // const u= JSON.stringify(localStorage.getItem('user'))

  const { user } = useAuth();

  const onSubmit = (data) => {
    data.offer = singleOffer;
    data.uid = user.uid;
    data.status = 'Pending';
    fetch("https://frightening-witch-07508.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Processed Successfully");
          reset();
        }
      });

    console.log(data);
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* <Col md={3}></Col> */}
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

          {/* User Form  */}
          <Col md={6}>
          <div className="mt-2">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input className="m-2" defaultValue={user.displayName} {...register("name")} />
              <br />
              <input className="m-2"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />{" "}
              <br />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input className="m-2"
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <br />
              <input className="m-2"
                placeholder="City"
                defaultValue=""
                {...register("city")}
              />{" "}
              <br />
              <input className="m-2"
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />{" "}
              <br />
              <input className="btn btn-outline-danger orange m-2" type="submit" value="Place Order" />
            </form>
          </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="d-flex "></div>
      </Container>
    </>
  );
};

export default OfferDetails;
