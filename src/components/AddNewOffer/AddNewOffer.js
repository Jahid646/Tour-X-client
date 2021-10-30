import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewOffer.css'

const AddNewOffer = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    axios.post('http://localhost:5000/offers', data)
            .then( res =>{ 
         if(res.data.insertedId){
             alert('Added Successfully')
             reset();
         }
    });

     
    }
    return (
        <Container>
            <Row>
                <Col md={12}>
                <div className="add-offer">
            <h2 className="orange" >Add New Offer</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name") } placeholder="name" /> <br/>
      <textarea {...register("description" ) }placeholder="description" /> <br/>
      <input type="number" {...register("price" )} placeholder="price" /> <br/>
      <input {...register("img" )} placeholder="img url" /> <br/>
      <input type="submit" className="btn btn-outline-danger orange" value="Add Offer" />
    </form>
        </div>
                </Col>
            </Row>
        </Container>
        
    );
};

export default AddNewOffer;