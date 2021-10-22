import React from 'react'
// import { NavLink } from 'react-router-dom';
import web from "../src/images/3.jpg";
import Common from './Common';

function About() {
    return (
        <>
       <Common name="Welcome to about page" imgsrc={web} visit="/Contact" btname="Contact Now"/>

        </>
    )
}

export default About;
