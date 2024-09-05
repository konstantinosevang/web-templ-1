// src/App.js
import React, { Component } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services';
import Newsletter from './components/Newsletter/Newsletter';
import Consultation from './components/Consultation/Consultation';
import Footer from './components/Footer/Footer'
import Steps from './components/Steps/Steps';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Steps />
      <Newsletter />
      <Consultation />
      <Footer />
      <Chatbot />
      {/* Other components */}
    </div>
  );
}

export default App;
