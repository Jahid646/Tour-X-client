import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import WhyBest from '../WhyBest/WhyBest';
import './Home.css'
const Home = () => {
    return (
        <div className="box">
            <Banner></Banner>
            <Offers></Offers>
            <WhyBest></WhyBest>
        
        </div>
    );
};

export default Home;