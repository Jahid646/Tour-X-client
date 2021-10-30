import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {


    const [offers, setOffers] = useState([]);

    useEffect(()=>{
fetch('http://localhost:5000/orders')
.then(res => res.json())
.then(data => setOffers(data));
    }, []);


const handleDelete = id =>{
    const url = `http://localhost:5000/orders/${id}`
    fetch(url, {
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount){
            alert('deleted');
            const remaining = offers.filter(offer => offer._id !== id);
        setOffers(remaining);
    }
        })
        
}

    return (
        <div>
            <h2>Manage all orders</h2>


            <hr/>
            {
                offers.map(offer => <div key={offer._id}>
                    <h3>{offer.name}</h3>
                    <button onClick={ ()=> handleDelete(offer._id)}>Delete</button> </div> )
            }
        </div>
        
    );
};

export default ManageAllOrders;