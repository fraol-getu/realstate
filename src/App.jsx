




import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import './App.css'
import Companies from "./Companies";
import Resdancies from "./components/Resdancies/Resdancies";
import Value from "./components/value/Value";
import Contact from "./components/contacts/Contact";
import GetStarted from "./components/getstared/GetStarted";
import Fotter from "./components/fotter/Fotter";
import { useState } from "react";

function App() {
  
  return (
    <div className="App">

      <div > 
      <div className="white-gradient"/>
      <Header />
      <Hero />
   
   </div>
    <Companies />
    <Resdancies />
    <Value />
    <Contact />
    <GetStarted />
    <Fotter/>
    </div>
  );

}




export default App;
