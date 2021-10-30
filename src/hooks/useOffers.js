import { useEffect } from "react";
import { useState } from "react"

const useOffers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setOffers(data.setOffers));
    }, []);
    return [offers, setOffers];
}

export default useOffers;