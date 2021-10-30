import { useState, useEffect } from 'react';
import { getStoredCart } from '../components/utilities/fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);
   
    useEffect(() => {
const savedCart = getStoredCart();
const keys = Object.keys(savedCart);
fetch('http://localhost:5000/products/byKeys', {
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(keys)
})
.then(res=> res.json())
.then(offers =>{
   
        if (offers.length) {
          
            const storedCart = [];
            for (const id in savedCart) {
                const addedOffer = offers.find(offer => offer.id === id);
                if (addedOffer) {
                    // set quantity
                    const quantity = savedCart[id];
                    addedOffer.quantity = quantity;
                    storedCart.push(addedOffer);
                }
            }
            setCart(storedCart);
        }

})

    
    }, []);

    return [cart, setCart];
}

export default useCart;