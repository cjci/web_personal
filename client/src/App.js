import React from "react";
import {  Routes, Route, Link} from "react-router-dom";

import "./App.scss";



function App() {

  
  return (

    
      <div className="app">
        <h1>Sistema de rutas Basico</h1> 

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="users" element={<Users />} />
        
      </Routes>       
      </div>
     
    
  );
}

function Home(){
  return <h2>Estamos en el componente Home</h2>;
};

function Contact(){
  return <h2>Estamos en el componente Contact...</h2>;
};

function Users(){
  return <h2>Estamos en el componente Users...</h2>;
};


export default App;
