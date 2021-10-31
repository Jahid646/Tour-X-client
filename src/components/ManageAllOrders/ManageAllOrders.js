
import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";


const ManageAllOrders = () => {
  const [offers, setOffers] = useState([]);
  const [singleOffer, setSingleOffer] = useState({});

  const { _id } = offers;

  useEffect(() => {
    fetch("http://localhost:5000/all-orders")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, [offers]);

  useEffect(() => {
    fetch(`http://localhost:5000/single-order/${_id}`)
      .then((res) => res.json())
      .then((data) => setSingleOffer(data));
  }, []);

  const handleApproved = (_id) => {
    const newStatus = "Approved";
    const newOffer = { ...singleOffer };
    newOffer.status = newStatus;
    setSingleOffer(newOffer);

    fetch(`http://localhost:5000/order-status/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOffer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleDelete = (id) => {
    const url = `http://localhost:5000/order/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = singleOffer.filter((offer) => offer._id !== id);
          setSingleOffer(remaining);
        }
      });
  };

  return (
    
    <Container>
        <h2 className="orange text-center">Manage Order</h2>
      {
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Offer Name</th>
                <th>Order By</th>
                <th>User Email</th>
                <th>User Id</th>
                <th>Price</th>
                <th>Order Status</th>
                <th>Order Approve</th>
                <th>Order Remove</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((user) => (
                <tr key={user._id} >
                  <td>{user.offer?.name}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.uid}</td>
                  <td>{user.offer?.price}</td>
                  <td>{user.status}</td>
                  <td>
                    <Button className="btn-success" onClick={() => handleApproved(user._id)}>
                      Approved
                    </Button>
                  </td>
                  <td>
                    <Button className="btn-danger" onClick={() => handleDelete(user._id)}>
                      Remove Order
                    </Button>
                  </td>
                </tr>
              ))}
              {/* <td>{singleOffer.offer?.name}</td>
               */}
            </tbody>
          </Table>
        </div>
      }
    </Container>
  );
};

export default ManageAllOrders;
