import React from 'react'
// import { NavLink } from 'react-router-dom';
import Image from "../src/images/web2.png";
import Common from './Common';

function Home() {
    return (
        <>
       <Common name="Grow Your Business with" imgsrc={Image} visit="/About" btname="Get Started"/>
        </>
    )
}

export default Home;
