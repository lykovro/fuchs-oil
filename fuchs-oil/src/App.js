import React, { useState } from 'react';
import HeaderIndex from './components/header_index';
import Index from './components/index';
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import mainImage from './assetsImage/assets/metalurgiya-glavnaya.jpg'; // Импортируйте изображения
import mainImage2 from './assetsImage/assets/chemical.jpg';
import Contacts from './components/contacts'


const App = () => {
 
  return (
    <Router>
      <HeaderIndex />
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/contacts" element={<Contacts />} />
        </Routes>
    <Footer />
    </Router>
  );
};

export default App;
