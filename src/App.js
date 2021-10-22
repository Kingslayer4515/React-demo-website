import React from 'react';

import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import Footer from './Footer';


import {Switch,Route,Redirect} from "react-router-dom";

const App= ( ) => {
  return (
    <>
    <Navbar/>
    
    
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/services" component={Services}/>
      <Redirect to ="/"/>
    
    </Switch>
    <Footer/>
    
    
    </>
    

    
  );
}

export default App;
