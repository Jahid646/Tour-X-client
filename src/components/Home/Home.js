import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import TravelerSay from '../TravelerSay/TravelerSay';
import WhyBest from '../WhyBest/WhyBest';
import './Home.css'
const Home = () => {
    return (
        <div className="box">
            <Banner></Banner>
            <Offers></Offers>
            <WhyBest></WhyBest>
            <TravelerSay></TravelerSay>
            <About></About>
        
        </div>
    );
};

export default Home;